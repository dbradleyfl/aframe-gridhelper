if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * GridHelper component for A-Frame.
 */
AFRAME.registerComponent('gridhelper', {
  schema: {
    size: { default: 10 },
    step: { default: 1 },
    colorCenterLine: {default: "red"},
    colorGrid: {default: "black"}
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;

    var size = data.size;
    var step = data.step;
    var colorCenterLine = data.colorCenterLine;
    var colorGrid = data.colorGrid;

    var gridHelper = new THREE.GridHelper( size, step );
    gridHelper.setColors(colorCenterLine, colorGrid);
    gridHelper.name = "gridHelper";
    scene.add(gridHelper);
  },
  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("gridHelper"));
  }
});
