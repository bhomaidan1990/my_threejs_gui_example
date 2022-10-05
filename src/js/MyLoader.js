import {
    Vector3,
} from "three";

import { createBase, loadYumi } from "./ModelCreator.js";
import CreateLego from "./LegoCreator.js";
import SceneCreator from "./SceneCreator.js";
import {changeColor, changeOpacity, removeLego, Blinker, PickPlace} from "./SpecialEffects.js";

let container = document.getElementById("container");

export default function init() {
    
    const sceneCreator_ = new SceneCreator(container)
    const scene = sceneCreator_.getScene();
    const camera = sceneCreator_.getCamera();
    const renderer = sceneCreator_.getRenderer();

    // const sE_ = new SpecialEffects(scene, camera, renderer)

    createBase(scene);
    loadYumi(scene);
    
    /**************************************************
    * TODO:
    *-------------------------------------------------
    * to make an object of ids and colors
    * my_lego = {1: [green, 2, pos_1],  2: [red, 4, pos_2], ...}
    * ------------------------------------------------
    ***************************************************/
    
    //(scene, size, color, name, position, rotation = false)
    const pos1 = new Vector3(0, 0, 0);
    new CreateLego(scene, 4, "yellow", "lego_1", pos1);

    const pos2 = new Vector3(2, 0, 0);
    new CreateLego(scene, 4, "blue", "lego_2", pos2);

    const pos3 = new Vector3(0, 21, 0);
    new CreateLego(scene, 4, "yellow", "lego_4", pos3);

    const pos4 = new Vector3(2, 21, 0);
    new CreateLego(scene, 4, "blue", "lego_6", pos4);

    const pos5 = new Vector3(8, 7, 0);
    new CreateLego(scene, 2, "white", "lego3", pos5);

    const pos6 = new Vector3(9, 7, 0);
    new CreateLego(scene, 2, "white", "lego_5", pos6);

    const pos7 = new Vector3(9, 9, 0);
    new CreateLego(scene, 2, "red", "lego_1", pos7);

    const pos8 = new Vector3(9, 10, 0);
    new CreateLego(scene, 2, "red", "lego_2", pos8);

    const pos9 = new Vector3(9, 12, 0);
    new CreateLego(scene, 4, "yellow", "lego_4", pos9);

    const pos10 = new Vector3(10, 12, 0);
    new CreateLego(scene, 2, "yellow", "lego_6", pos10);
    /*xxxxxxxxxxxxx Green Cubes xxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    const pos11 = new Vector3(1, 7, 0);
    new CreateLego(scene, 2, "green", "lego3", pos11);

    const pos12 = new Vector3(1, 15, 0);
    new CreateLego(scene, 2, "green", "lego_5", pos12);

    const pos13 = new Vector3(7, 7, 0);
    new CreateLego(scene, 2, "green", "lego_1", pos13);

    const pos14 = new Vector3(7, 15, 0);
    new CreateLego(scene, 2, "green", "lego_2", pos14);
    /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
    const pos15 = new Vector3(0, 3, 0);
    new CreateLego(scene, 2, "white", "lego_6", pos15);

    const pos16 = new Vector3(0, 5, 0);
    new CreateLego(scene, 2, "olive", "lego_6", pos16);

    const pos17 = new Vector3(2, 3, 0);
    new CreateLego(scene, 2, "blue", "lego_6", pos17);

    const pos18 = new Vector3(4, 1, 0);
    new CreateLego(scene, 2, "red", "lego_6", pos18);

    const pos19 = new Vector3(4, 21, 0);
    new CreateLego(scene, 2, "red", "lego_6", pos19);

    const pos20 = new Vector3(10, 7, 0);
    new CreateLego(scene, 2, "white", "lego_6", pos20);

    const pos21 = new Vector3(10, 9, 0);
    new CreateLego(scene, 2, "red", "lego_6", pos21);

    const pos22 = new Vector3(8, 9, 0);
    new CreateLego(scene, 4, "red", "lego_6", pos22);

    const pos23 = new Vector3(8, 12, 0);
    new CreateLego(scene, 4, "yellow", "lego_6", pos23);

    const pos24 = new Vector3(8, 15, 0);
    new CreateLego(scene, 2, "light", "lego_6", pos24);

    const pos25 = new Vector3(9, 15, 0);
    new CreateLego(scene, 2, "light", "lego_6", pos25);

    const pos26 = new Vector3(8, 17, 0);
    new CreateLego(scene, 2, "olive", "lego_6", pos26);

    const pos27 = new Vector3(0, 17, 0);
    new CreateLego(scene, 2, "olive", "lego_6", pos27);

    const pos28 = new Vector3(0, 19, 0);
    new CreateLego(scene, 2, "white", "lego_6", pos28);

    const pos29 = new Vector3(2, 19, 0);
    new CreateLego(scene, 2, "blue", "lego_20", pos29);


    const place_pos = new Vector3(9, 20, 0);

    const pp_ = new PickPlace(renderer, scene, camera,
        "lego_4", place_pos, false);
    pp_.animatePickPlace();

    const blinker_ = new Blinker(renderer, scene, camera,
        "lego_5");
    blinker_.blink();
    // blinker_.stop_blinking();

    changeColor(scene, "lego_20", "yellow");
    changeOpacity(scene, "lego_2", 0.8);
    removeLego(scene, "lego_2");
}
