import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class ArticleCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nama: '',
            alamat: '',
            penyakit: '',
            ruangan: '',
            dokter: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewArticle = this.handleCreateNewArticle.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Created article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewArticle (event) {
        event.preventDefault()
        const article = {
          nama: this.state.nama,
          alamat: this.state.alamat,
          penyakit: this.state.penyakit,
          ruangan: this.state.ruangan,
          dokter: this.state.dokter
        }
        axios.post('/api/article/store', article).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewArticle}>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input
                          id='alamat'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='penyakit'>Penyakit</label>
                        <input
                          id='penyakit'
                          type='text'
                          className={`form-control ${this.hasErrorFor('penyakit') ? 'is-invalid' : ''}`}
                          name='penyakit'
                          value={this.state.penyakit}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('penyakit')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='ruangan'>Ruangan</label>
                        <input
                          id='ruangan'
                          type='text'
                          className={`form-control ${this.hasErrorFor('ruangan') ? 'is-invalid' : ''}`}
                          name='ruangan'
                          value={this.state.ruangan}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('ruangan')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='dokter'>Dokter</label>
                        <input
                          id='dokter'
                          type='text'
                          className={`form-control ${this.hasErrorFor('dokter') ? 'is-invalid' : ''}`}
                          name='dokter'
                          value={this.state.dokter}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('dokter')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default ArticleCreate