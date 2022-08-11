import { LightningElement } from 'lwc';

export default class UserForm extends LightningElement {

    emitUserAddEvent(){
        this.dispatchEvent(new CustomEvent('added', {
            bubbles: true,
            composed: true
        }));
    }
    
}