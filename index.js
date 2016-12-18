if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * GridHelper component for A-Frame.
 */
AFRAME.registerComponent('gridhelper', {
  schema: {
    size: { default: 5 },
    divisions: { default: 10 },
    colorCenterLine: {default: 'red'},
    colorGrid: {default: 'black'}
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var scene = this.el.object3D;
    var data = this.data;

    var size = data.size;
    var divisions = data.divisions;
    var colorCenterLine = data.colorCenterLine;
    var colorGrid = data.colorGrid;

    var gridHelper = new THREE.GridHelper( size, divisions, colorCenterLine, colorGrid );
    gridHelper.name = "gridHelper";
    scene.add(gridHelper);
  },
  remove: function () {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName("gridHelper"));
  }
});
