import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';

import ElfElements from './ElfElements';


class ShowUserInfo extends Component {
    constructor(props) {
        super(props);
        if (!this.props.gitUser) {
            throw new Error('No user data');
        }
    }

    getForm = (field, index) => {
        return (
            <div className="ElfFormRow" key={field.id}>
                <label className="ElfFormLabel" htmlFor={field.id}>{field.label}:</label>
                <ElfElements {...field}
                             value={this.props.gitUser[field.id]}
                             onChange={this.props.onChange}
                />
            </div>
        );
    };

    render() {
        return (


            <form className="Form">{
                this.props.fields.map((field, index) => {
                    return this.getForm(field, index);
                })
            }
                <button className="getUser" onClick={this.props.onChange}>get Git User</button>
            </form>

        );
    }
}
export default ShowUserInfo;
