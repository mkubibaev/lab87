import React, {Component, Fragment} from 'react';
import FormElement from "../UI/Form/FormElement";

class PostForm extends Component {
    state = {
        title: '',
        description: '',
        image: null
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            if (this.state[key]) {
                formData.append(key, this.state[key]);
            }
        });

        this.props.onAdd(formData)
    };


    render() {
        return (
            <Fragment>
                <h2 className="mb-4">Add new post</h2>
                <form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="title"
                        title="Post title:"
                        type="text"
                        value={this.state.title}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter post title"
                    />

                    <FormElement
                        propertyName="description"
                        title="Description:"
                        type="textarea"
                        value={this.state.description}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter post description"
                    />

                    <FormElement
                        propertyName="image"
                        title="Post image:"
                        type="file"
                        onChange={this.fileChangeHandler}
                    />

                    <div className="row">
                        <div className="form-group mt-2 col-12">
                            <button type="submit" className="btn btn-info">Save</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default PostForm;
