import { LightningElement } from 'lwc';
import imgfolder from '@salesforce/resourceUrl/adt';
import servicestext from '@salesforce/label/c.adt_scatalog_services_text';
import title1 from '@salesforce/label/c.adt_scatalog_title_1';
import title2 from '@salesforce/label/c.adt_scatalog_title_2';
import title3 from '@salesforce/label/c.adt_scatalog_title_3';
import desc1 from '@salesforce/label/c.adt_scatalog_desc_1';
import desc2 from '@salesforce/label/c.adt_scatalog_desc_2';
import desc3 from '@salesforce/label/c.adt_scatalog_desc_3';
export default class ServicesCont extends LightningElement {
    img1 = imgfolder + '/cloudimages/img1.png';
    img2 = imgfolder + '/cloudimages/img2.png';
    img4 = imgfolder + '/cloudimages/img4.png';
    img5 = imgfolder + '/cloudimages/img5.png';
    img6 = imgfolder + '/cloudimages/img6.png';
    img3 = imgfolder + '/cloudimages/img3.png';
    label ={
        servicestext,
        title1,
        title2,
        title3,
        desc1,
        desc2,
        desc3
    }
}