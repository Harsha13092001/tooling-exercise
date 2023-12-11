import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}
// Your code to use GLTFLoader
const loader = new GLTFLoader();
loader.load('path/to/model.gltf', (gltf) => {
  // Your code to handle the loaded glTF model
  scene.add(gltf.scene);
}, undefined, (error) => {
  console.error('Error loading glTF model', error);
});

loadIfc('../01.ifc');