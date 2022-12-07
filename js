import { LightningElement } from 'lwc';

export default class ComboBox extends LightningElement {
 
    selectedItems = []

    get options() {
        return [
            { label: 'Salesforce Admin', value: 'Admin201' },
            { label: 'Salesforce Consultant', value: 'Consultant' },
            { label: 'Salesforce Dev', value: 'Dev' },
            { label: 'Salesforce Architect', value: 'Architect' },
            { label: 'Salesforce Engineer', value: 'Engineer' },
            { label: 'Salesforce Analyst', value: 'Analyst' },
            { label: 'Salesforce Designer', value: 'Designer' },
            { label: 'Salesforce Manager', value: 'Manager' },
            { label: 'Salesforce Tester', value: 'Tester' },
        ]
    }

    comboboxHandler(event) {
        let selectedLabel = event.target.options.find(opt => opt.value === event.detail.value).label
        let selectedValue = event.target.value
        const data = this.selectedItems
        let tempObj = {
            id: selectedValue,
            label: selectedLabel
        }
        let itemExists = data.some(el => el.id === tempObj.id)
        if (itemExists == false) {
            data.push(tempObj)
            this.selectedItems = []
            this.selectedItems = data
        }

    }   

}

