export default class ElfDebug {
    constructor(showData=false, callerName = '') {
        this.showData = showData;
        this.callerName = callerName + ':\n';
    }

    display(value) {
        console.log(this.callerName + value)
    }

    getFirst(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).first().debug();
            this.display(paragraphData);
        }
    }

    getLast(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).last().debug();
            this.display(this.callerName + paragraphData);
        }

    }

    getAll(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).debug();
            this.display(paragraphData);
        }
    }

    getIndex(wrapper, index) {
        if (this.showData) {
            var paragraphData = wrapper.find('form').childAt(index).debug();
            this.display(paragraphData);
        }
    }
}