$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 200, 10, "hotpink") 
    createPlatform(100, 550, 100, 10, "hotpink")
    createPlatform(300, 450, 150, 10, "hotpink")
    createPlatform(600, 350, 200, 10, "hotpink")
    createPlatform(950, 500, 300, 10, "hotpink")
    // TODO 3 - Create Collectables
    createCollectable("grace", 100, 200, 1.0, 0.7);
    createCollectable("max", 300, 180, 0.5, 0.9);
    createCollectable("kennedi", 600, 150, 0.7, 1.0);
    createCollectable("steve", 950, 120, 1.5, 0.8);
    // TODO 4 - Create Cannons
    createCannon("left", 100, 700);
createCannon("right", 250, 1000);
createCannon("top", 350, 1300);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
