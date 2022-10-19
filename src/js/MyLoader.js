import { createBase, loadYumi } from "./ModelCreator.js";
import SceneCreator from "./SceneCreator.js";
import VisionInterface from "./VisionInterface.js";

let container = document.getElementById("container");

export default function init() {
    
    const sceneCreator_ = new SceneCreator(container)
    const scene = sceneCreator_.getScene();
    // const camera = sceneCreator_.getCamera();
    // const renderer = sceneCreator_.getRenderer();

    createBase(scene);
    // loadYumi(scene);
    
    const vision_iface = new VisionInterface();
    vision_iface.init(scene, "complex");
    vision_iface.updateLegos();
}