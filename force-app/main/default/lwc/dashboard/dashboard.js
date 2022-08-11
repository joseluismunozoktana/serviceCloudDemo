import { LightningElement } from 'lwc';
import imgfolder from '@salesforce/resourceUrl/cloudimages';

export default class Dashboard extends LightningElement {
    handleClick(){
        this.dispatchEvent(new CustomEvent('clicked', {
            bubbles: true,
            composed: true
        }));
    }
    img1 = imgfolder + '/img1.jpg';
    img2 = imgfolder + '/img2.jpg';
    img3 = imgfolder + '/img3.jpg';
    img4 = imgfolder + '/img4.jpg';
    img5 = imgfolder + '/img5.jpg';
    img6 = imgfolder + '/img6.jpg';

}