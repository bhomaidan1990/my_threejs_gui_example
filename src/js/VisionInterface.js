import ROSInterface from "./ROSInterface.js";
import CreateLego from "./LegoCreator.js";
import { Vector3, Group } from "three";

export default class VisionInterface {
    constructor() {
        this.iface = new ROSInterface();
        this.old_dict = "";
        this.old_model = "";
        this.vision_dict = {
            p_00_00:[ 'g', 0 ], p_00_01:[ 'g', 0 ], p_00_02:[ 'g', 0 ], p_00_03:[ 'g', 0 ], p_00_04:[ 'g', 0 ], p_00_05:[ 'g', 0 ], p_00_06:[ 'g', 0 ], p_00_07:[ 'g', 0 ], p_00_08:[ 'g', 0 ], p_00_09:[ 'g', 0 ], p_00_10:[ 'g', 0 ], p_00_11:[ 'g', 0 ], p_00_12:[ 'g', 0 ], p_00_13:[ 'g', 0 ], p_00_14:[ 'g', 0 ], p_00_15:[ 'g', 0 ], p_00_16:[ 'g', 0 ], p_00_17:[ 'g', 0 ], p_00_18:[ 'g', 0 ], p_00_19:[ 'g', 0 ], p_00_20:[ 'g', 0 ], p_00_21:[ 'g', 0 ], p_00_22:[ 'g', 0 ],
            p_01_00:[ 'g', 0 ], p_01_01:[ 'g', 0 ], p_01_02:[ 'g', 0 ], p_01_03:[ 'g', 0 ], p_01_04:[ 'g', 0 ], p_01_05:[ 'g', 0 ], p_01_06:[ 'g', 0 ], p_01_07:[ 'g', 0 ], p_01_08:[ 'g', 0 ], p_01_09:[ 'g', 0 ], p_01_10:[ 'g', 0 ], p_01_11:[ 'g', 0 ], p_01_12:[ 'g', 0 ], p_01_13:[ 'g', 0 ], p_01_14:[ 'g', 0 ], p_01_15:[ 'g', 0 ], p_01_16:[ 'g', 0 ], p_01_17:[ 'g', 0 ], p_01_18:[ 'g', 0 ], p_01_19:[ 'g', 0 ], p_01_20:[ 'g', 0 ], p_01_21:[ 'g', 0 ], p_01_22:[ 'g', 0 ],
            p_02_00:[ 'g', 0 ], p_02_01:[ 'g', 0 ], p_02_02:[ 'g', 0 ], p_02_03:[ 'g', 0 ], p_02_04:[ 'g', 0 ], p_02_05:[ 'g', 0 ], p_02_06:[ 'g', 0 ], p_02_07:[ 'g', 0 ], p_02_08:[ 'g', 0 ], p_02_09:[ 'g', 0 ], p_02_10:[ 'g', 0 ], p_02_11:[ 'g', 0 ], p_02_12:[ 'g', 0 ], p_02_13:[ 'g', 0 ], p_02_14:[ 'g', 0 ], p_02_15:[ 'g', 0 ], p_02_16:[ 'g', 0 ], p_02_17:[ 'g', 0 ], p_02_18:[ 'g', 0 ], p_02_19:[ 'g', 0 ], p_02_20:[ 'g', 0 ], p_02_21:[ 'g', 0 ], p_02_22:[ 'g', 0 ],
            p_03_00:[ 'g', 0 ], p_03_01:[ 'g', 0 ], p_03_02:[ 'g', 0 ], p_03_03:[ 'g', 0 ], p_03_04:[ 'g', 0 ], p_03_05:[ 'g', 0 ], p_03_06:[ 'g', 0 ], p_03_07:[ 'g', 0 ], p_03_08:[ 'g', 0 ], p_03_09:[ 'g', 0 ], p_03_10:[ 'g', 0 ], p_03_11:[ 'g', 0 ], p_03_12:[ 'g', 0 ], p_03_13:[ 'g', 0 ], p_03_14:[ 'g', 0 ], p_03_15:[ 'g', 0 ], p_03_16:[ 'g', 0 ], p_03_17:[ 'g', 0 ], p_03_18:[ 'g', 0 ], p_03_19:[ 'g', 0 ], p_03_20:[ 'g', 0 ], p_03_21:[ 'g', 0 ], p_03_22:[ 'g', 0 ],
            p_04_00:[ 'g', 0 ], p_04_01:[ 'g', 0 ], p_04_02:[ 'g', 0 ], p_04_03:[ 'g', 0 ], p_04_04:[ 'g', 0 ], p_04_05:[ 'g', 0 ], p_04_06:[ 'g', 0 ], p_04_07:[ 'g', 0 ], p_04_08:[ 'g', 0 ], p_04_09:[ 'g', 0 ], p_04_10:[ 'g', 0 ], p_04_11:[ 'g', 0 ], p_04_12:[ 'g', 0 ], p_04_13:[ 'g', 0 ], p_04_14:[ 'g', 0 ], p_04_15:[ 'g', 0 ], p_04_16:[ 'g', 0 ], p_04_17:[ 'g', 0 ], p_04_18:[ 'g', 0 ], p_04_19:[ 'g', 0 ], p_04_20:[ 'g', 0 ], p_04_21:[ 'g', 0 ], p_04_22:[ 'g', 0 ],
            p_05_00:[ 'g', 0 ], p_05_01:[ 'g', 0 ], p_05_02:[ 'g', 0 ], p_05_03:[ 'g', 0 ], p_05_04:[ 'g', 0 ], p_05_05:[ 'g', 0 ], p_05_06:[ 'g', 0 ], p_05_07:[ 'g', 0 ], p_05_08:[ 'g', 0 ], p_05_09:[ 'g', 0 ], p_05_10:[ 'g', 0 ], p_05_11:[ 'g', 0 ], p_05_12:[ 'g', 0 ], p_05_13:[ 'g', 0 ], p_05_14:[ 'g', 0 ], p_05_15:[ 'g', 0 ], p_05_16:[ 'g', 0 ], p_05_17:[ 'g', 0 ], p_05_18:[ 'g', 0 ], p_05_19:[ 'g', 0 ], p_05_20:[ 'g', 0 ], p_05_21:[ 'g', 0 ], p_05_22:[ 'g', 0 ],
            p_06_00:[ 'g', 0 ], p_06_01:[ 'g', 0 ], p_06_02:[ 'g', 0 ], p_06_03:[ 'g', 0 ], p_06_04:[ 'g', 0 ], p_06_05:[ 'g', 0 ], p_06_06:[ 'g', 0 ], p_06_07:[ 'g', 0 ], p_06_08:[ 'g', 0 ], p_06_09:[ 'g', 0 ], p_06_10:[ 'g', 0 ], p_06_11:[ 'g', 0 ], p_06_12:[ 'g', 0 ], p_06_13:[ 'g', 0 ], p_06_14:[ 'g', 0 ], p_06_15:[ 'g', 0 ], p_06_16:[ 'g', 0 ], p_06_17:[ 'g', 0 ], p_06_18:[ 'g', 0 ], p_06_19:[ 'g', 0 ], p_06_20:[ 'g', 0 ], p_06_21:[ 'g', 0 ], p_06_22:[ 'g', 0 ],
            p_07_00:[ 'g', 0 ], p_07_01:[ 'g', 0 ], p_07_02:[ 'g', 0 ], p_07_03:[ 'g', 0 ], p_07_04:[ 'g', 0 ], p_07_05:[ 'g', 0 ], p_07_06:[ 'g', 0 ], p_07_07:[ 'g', 0 ], p_07_08:[ 'g', 0 ], p_07_09:[ 'g', 0 ], p_07_10:[ 'g', 0 ], p_07_11:[ 'g', 0 ], p_07_12:[ 'g', 0 ], p_07_13:[ 'g', 0 ], p_07_14:[ 'g', 0 ], p_07_15:[ 'g', 0 ], p_07_16:[ 'g', 0 ], p_07_17:[ 'g', 0 ], p_07_18:[ 'g', 0 ], p_07_19:[ 'g', 0 ], p_07_20:[ 'g', 0 ], p_07_21:[ 'g', 0 ], p_07_22:[ 'g', 0 ],
            p_08_00:[ 'g', 0 ], p_08_01:[ 'g', 0 ], p_08_02:[ 'g', 0 ], p_08_03:[ 'g', 0 ], p_08_04:[ 'g', 0 ], p_08_05:[ 'g', 0 ], p_08_06:[ 'g', 0 ], p_08_07:[ 'g', 0 ], p_08_08:[ 'g', 0 ], p_08_09:[ 'g', 0 ], p_08_10:[ 'g', 0 ], p_08_11:[ 'g', 0 ], p_08_12:[ 'g', 0 ], p_08_13:[ 'g', 0 ], p_08_14:[ 'g', 0 ], p_08_15:[ 'g', 0 ], p_08_16:[ 'g', 0 ], p_08_17:[ 'g', 0 ], p_08_18:[ 'g', 0 ], p_08_19:[ 'g', 0 ], p_08_20:[ 'g', 0 ], p_08_21:[ 'g', 0 ], p_08_22:[ 'g', 0 ],
            p_09_00:[ 'g', 0 ], p_09_01:[ 'g', 0 ], p_09_02:[ 'g', 0 ], p_09_03:[ 'g', 0 ], p_09_04:[ 'g', 0 ], p_09_05:[ 'g', 0 ], p_09_06:[ 'g', 0 ], p_09_07:[ 'g', 0 ], p_09_08:[ 'g', 0 ], p_09_09:[ 'g', 0 ], p_09_10:[ 'g', 0 ], p_09_11:[ 'g', 0 ], p_09_12:[ 'g', 0 ], p_09_13:[ 'g', 0 ], p_09_14:[ 'g', 0 ], p_09_15:[ 'g', 0 ], p_09_16:[ 'g', 0 ], p_09_17:[ 'g', 0 ], p_09_18:[ 'g', 0 ], p_09_19:[ 'g', 0 ], p_09_20:[ 'g', 0 ], p_09_21:[ 'g', 0 ], p_09_22:[ 'g', 0 ],
            p_10_00:[ 'g', 0 ], p_10_01:[ 'g', 0 ], p_10_02:[ 'g', 0 ], p_10_03:[ 'g', 0 ], p_10_04:[ 'g', 0 ], p_10_05:[ 'g', 0 ], p_10_06:[ 'g', 0 ], p_10_07:[ 'g', 0 ], p_10_08:[ 'g', 0 ], p_10_09:[ 'g', 0 ], p_10_10:[ 'g', 0 ], p_10_11:[ 'g', 0 ], p_10_12:[ 'g', 0 ], p_10_13:[ 'g', 0 ], p_10_14:[ 'g', 0 ], p_10_15:[ 'g', 0 ], p_10_16:[ 'g', 0 ], p_10_17:[ 'g', 0 ], p_10_18:[ 'g', 0 ], p_10_19:[ 'g', 0 ], p_10_20:[ 'g', 0 ], p_10_21:[ 'g', 0 ], p_10_22:[ 'g', 0 ]
        }
        this.assembly_zone = ['p_02_08', 'p_02_09', 'p_02_10', 'p_02_11', 'p_03_11', 'p_04_11', 'p_05_11',
            'p_05_12', 'p_05_13', 'p_05_14', 'p_06_13'];
        this.corner_positions = ['p_01_07', 'p_01_15', 'p_07_07', 'p_07_15'];
    }

    init=(scene, model)=> { 
        this.scene = scene;
        this.model = model;
    }

    removeLegoByPos = (pos) => {
        let LegoToBeRemoved = undefined;

        this.scene.traverse((child) => {
            if (child.isGroup && child.userData.position) {
                if (child.userData.position.equals(pos)) {
                    LegoToBeRemoved = child;
                }
            }
        });

        if (LegoToBeRemoved) {
            LegoToBeRemoved.removeFromParent()
            return true
        }
        return false
    }

    rosIface = (msg) => {
        if (this.old_dict.localeCompare(msg) != 0) {
            const msg_obj = JSON.parse(msg);
            let lego_id = 0;
        
            for (let pos in msg_obj) {
                 
                let p_xx_yy = pos.split("_");
                let x = Number(p_xx_yy[1]);
                let y = Number(p_xx_yy[2]);
                let z = Number(msg_obj[pos][1]);
                let c = msg_obj[pos][0];
                
                if (this.assembly_zone.indexOf(pos) <= -1) {
                    // console.log(pos+"__"+c);
                    if (z > this.vision_dict[pos][1]) {
                        let lego_pos = new Vector3(x, y, z-1);
                        new CreateLego(this.scene, 2, c, "lego_" + lego_id, lego_pos, false)
                    }
                    else if (z < this.vision_dict[pos][1] ||
                        (c === 'g' && this.corner_positions.indexOf(pos) <= -1)) {
                        let lego_pos = new Vector3(x, y, z);
                        this.removeLegoByPos(lego_pos);
                    }
                    this.vision_dict[pos][0] = c;
                    this.vision_dict[pos][1] = z;
                }
                lego_id += 1;
            }
            this.old_dict = msg;
            // console.log(this.vision_dict);
        }
    }

    modelIface = (msg) => {
        if (this.old_model.localeCompare(msg) != 0) {
            this.scene.remove(this.assembly);
            this.assembly = new Group();
            this.assembly.name = "assembly";

            const msg_obj = JSON.parse(msg);
            let lego_id = 0;
            let p_xx_yy;
            let x;
            let y;
            let z;
            let c;

            for (let pos in msg_obj) {
                if (msg_obj[pos]) {
                    p_xx_yy = pos.split("_");
                    x = Number(p_xx_yy[1]);
                    y = Number(p_xx_yy[2]);

                    for (let lego in msg_obj[pos]) {
                        z = Number(lego[0]);
                        let lego_pos = new Vector3(x, y, z - 1);
                        c = msg_obj[pos][lego];
                        new CreateLego(this.assembly, 2, c, "lego_a_" + lego_id, lego_pos, false)
                        this.vision_dict[pos][0] = c;
                        this.vision_dict[pos][1] = z;
                    }
                    this.scene.add(this.assembly)
                    this.old_model = msg;
                }
            }
        }
    }
    
    updateLegos=()=> {
        // create a listner to retrive world model from camera
        this.iface.subscriber('/vision_dict', 'std_msgs/String', this.rosIface);
        this.iface.subscriber('/model', 'std_msgs/String', this.modelIface);
        /*********************************************************************************
         *  TODO: 
         * 0. this.vision_dict["lego_"+lego_id] = {
                size: this.getSize(),
                position: {
                'x': x,
                'y': y,
                'z': z
                },
                rotation: this.getRotation(),
                color: c
            }
         * 1. Compare to the Previous State and get the Difference.
         * 
         * 2. For Each Green Pos (Except Corners) pop the Lego to a Pop-List.

         * 3. For Each Changing Color/Depth check the Pop-List, and add the Lego from it.

         * 4. If Lego size = 4, check rotation!. 
        *********************************************************************************/
    }
}