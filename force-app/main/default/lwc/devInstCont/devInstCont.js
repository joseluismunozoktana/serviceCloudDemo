import { LightningElement } from 'lwc';
import imgfolder from '@salesforce/resourceUrl/adt';
import title1 from '@salesforce/label/c.adt_devinstall_title_1';
import title2 from '@salesforce/label/c.adt_devinstall_title_2';
import title3 from '@salesforce/label/c.adt_devinstall_title_3';
import desc1 from '@salesforce/label/c.adt_devinstall_desc_1';
import desc2 from '@salesforce/label/c.adt_devinstall_desc_2';
import desc3 from '@salesforce/label/c.adt_devinstall_desc_3';
import vraflowlink from '@salesforce/label/c.adt_vrajourneyflow';
export default class DevInstCont extends LightningElement {
    img1 = imgfolder + '/mainscreen/img1.png';
    img2 = imgfolder + '/mainscreen/img2.png';
    img3 = imgfolder + '/mainscreen/img3.png';
    label ={
        title1,
        title2,
        title3,
        desc1,
        desc2,
        desc3,
        vraflowlink
    }

}