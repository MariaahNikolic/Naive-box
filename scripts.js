
  //background 360 video

  if ($(".animation").length) {
    let containerSelector = "#container360";
    let dragWizard = $("#drag-wizard");

    let viewer = new Kaleidoscope.Video({
      source: "./video/Naive_box.mp4",
      containerId: containerSelector,
      height: window.innerHeight,
      width: window.innerWidth,
    });
    viewer.render();
    $(containerSelector).on("click", function () {
      dragWizard.addClass("hide");
    });

    window.onresize = function () {
      viewer.setSize({
        height: window.innerHeight - 100,
        width: window.innerWidth,
      });
    };
    document
      .querySelector(containerSelector)
      .addEventListener("touchend", viewer.play.bind(viewer));
  }