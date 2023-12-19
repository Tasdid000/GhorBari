import React, { Component } from 'react';
import { ModalBody, Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchProperty} from '../../../redux/actionCreators';
import PropertyDetails from './PropertyDetails';
import PropertyList from './PropertyList';
import "./style.css"


const mapStateToProps = state => {
    return {
        Property: state.Property,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProperty: () => dispatch(fetchProperty()),
    }
}

class Property extends Component {
    state = {
        selectedProperty: null,
        modalOpen: false
    }

    onPropertySelect = Property => {
        this.setState({
            selectedProperty: Property,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchProperty();

    }

    render() {

        if (this.props.Property.isLoading) {
            return (
                <div>

                </div>
            );
        }
        else {
            const Property = this.props.Property.Property.map(item => {
                return (
                    <PropertyList
                        Property={item}
                        key={item.id}
                        PropertySelect={() => this.onPropertySelect(item)}
                    />
                );
            })

            let PropertyDetail = null;

            if (this.state.selectedProperty != null) {
                PropertyDetail = <PropertyDetails
                    Property={this.state.selectedProperty}
                />
            }

            return (
                <div style={{ overflow: "hidden" }}>
                    <div className="row">
                        <div>
                            {Property}
                        </div>
                        <Modal isOpen={this.state.modalOpen} style={{ border: "none", marginRight: "100%" }}>
                            <ModalBody>
                                {PropertyDetail}<br />
                                <button onClick={this.toggleModal} class="button24" role="button">Back</button>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);