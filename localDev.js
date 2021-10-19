Game.devEnv = true;

if (Game.devEnv) {
	Game.ErrorFrame=function name() {
		Game.Load();
	}
}
