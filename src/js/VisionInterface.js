import ROSInterface from "./ROSInterface.js";
import CreateLego from "./LegoCreator.js";
import { Vector3, Group } from "three";

export default class VisionInterface {
    constructor() {
        this.iface = new ROSInterface();
        this.old_model = "";
        this.corners = {
            lego_101: { size: 2, position: { x: 1, y:  7, z: 0 }, rotation: false, color: "g" },
            lego_102: { size: 2, position: { x: 1, y: 15, z: 0 }, rotation: false, color: "g" },
            lego_103: { size: 2, position: { x: 7, y:  7, z: 0 }, rotation: false, color: "g" },
            lego_104: { size: 2, position: { x: 7, y: 15, z: 0 }, rotation: false, color: "g" }
        };
    }
    
    init = (scene, model) => {
        this.scene = scene;
        this.model = model;
        this.createCorners();
    }

    createCorners=()=> { 
        let pos;
        for (const corner of Object.keys(this.corners)) {
            pos = new Vector3(
                this.corners[corner]["position"]["x"],
                this.corners[corner]["position"]["y"],
                this.corners[corner]["position"]["z"]
            );
            new CreateLego(this.scene,
                this.corners[corner]["size"],
                this.corners[corner]["color"],
                corner,
                pos,
                this.corners[corner]["rotation"]);
        }
    }

    rosIface = (msg) => {
        if (this.old_model.localeCompare(msg) != 0) {

            this.scene.remove(this.assembly);
            this.assembly = new Group();
            this.assembly.name = "assembly";

            const msg_obj = JSON.parse(msg);
            console.log(msg_obj);
            for (let lego in msg_obj) {

                if (msg_obj[lego]) {
                    let lego_id = lego;
                    let size = msg_obj[lego].length;
                    let p_xx_yy = msg_obj[lego][0].split("_");
                    let x = Number(p_xx_yy[1]);
                    let y = Number(p_xx_yy[2]);
                    let z = msg_obj[lego][size - 1] - 1;
                    let c = lego[0];
                    
                    let rot = false;
                    if (size === 4) {
                        z = msg_obj[lego][size - 2] - 1;
                        rot = msg_obj[lego][size - 3];
                    }
                    let lego_pos = new Vector3(x, y, z);
                    new CreateLego(this.assembly, size, c, lego_id, lego_pos)
                }
            }
            this.scene.add(this.assembly);
        }
    }

    updateLegos = () => {
        // create a listner to retrive world model from camera
        this.iface.subscriber('/lego_map', 'std_msgs/String', this.rosIface);
    }

}