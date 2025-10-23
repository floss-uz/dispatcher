{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";

    #    Git hooks
    pre-commit-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    pre-commit-hooks,
    treefmt-nix,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
      treefmt = treefmt-nix.lib.mkWrapper pkgs {
        projectRootFile = "flake.nix";
        programs = {
          prettier.enable = true;
          alejandra.enable = true;
        };
      };

      preCommit = pre-commit-hooks.lib.${system}.run {
        src = ./.;
        hooks = {
          prettier.enable = true;
          eslint.enable = true;
          alejandra.enable = true;
        };
      };
    in {
      checks.pre-commit-check = preCommit;

      devShells.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24
          zip
          treefmt
          git
        ];
        shellHook = ''
          export PATH=$PWD/node_modules/.bin:$PATH
          echo "react dev-shell loaded node:$(node -v)"
        '';
      };
    });
}
