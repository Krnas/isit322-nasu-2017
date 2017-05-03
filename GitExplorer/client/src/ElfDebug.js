/**
 * Created by bcuser on 5/2/17.
 */
import React from 'react';


export default class ElfDebug {
    constructor(showInit) {
        this.showData = showInit;
    }

    getFirst(wrapper, element) {
        if (showData) {
            const paragraphData = wrapper.find(element).first().debug();
            console.log(paragraphData);
        }
        getLast(wrapper, element)
        {
            if (this.showData) {
                const paragraphData = wrapper.find(element).last().debug();
                console.log(paragraphData);
            }
        }
        getAll(wrapper, element)
        {
            if (showData) {
                const paragraphData = wrapper.find(element).debug();
                console.log(paragraphData);
            }
        }
    }
}