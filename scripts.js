
  //background 360 video

  if ($(".animation").length) {
    let containerSelector = "#container360";
    let dragWizard = $("#drag-wizard");

    let viewer = new Kaleidoscope.Video({
      source: "https://drive.google.com/file/d/10CtALaS5nOnZ9gl8pZ6beEt3WRkgAqzL/view?usp=sharing",
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