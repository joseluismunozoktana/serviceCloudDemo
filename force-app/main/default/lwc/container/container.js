import { LightningElement, api, wire } from 'lwc';

export default class Container extends LightningElement {

    renderedCallback(){
        this.template.querySelector('c-user-form').style.display = "none";
        this.template.querySelector('c-success-toast').style.display="none";
    }

    handleClick(){
        this.template.querySelector('c-user-form').style.display = "initial";
        this.template.querySelector('c-dashboard').style.display="none";
    }
    
    handleNewUser(){
        this.template.querySelector('c-dashboard').style.display = "initial";
        this.template.querySelector('c-user-form').style.display="none";
        this.template.querySelector('c-success-toast').style.display="initial";
    }
}