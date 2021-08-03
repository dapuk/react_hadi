import React, { Component } from 'react'
import user from '../../user.png'


export default class Profil extends Component {
    render() {
        return (
           <div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
    </div>{/* /.container-fluid */}
  </section>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Data Profile</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-sm btn-primary">
                  <i className="fas fa-edit" /> Edit Profile
                </a>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img className="profile-user-img img-fluid img-circle" src={user} alt="User profile picture" />
                      </div>
                      <h3 className="profile-username text-center">Admin E-TEST</h3>
                      <p className="text-muted text-center">Software Engineer</p>
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <b>Staff</b> <a className="float-right">Admin</a>
                        </li>
                        <li className="list-group-item">
                          <b>Dosen</b> <a className="float-right">Computer Science</a>
                        </li>
                        <li className="list-group-item">
                          <b>Bidang</b> <a className="float-right">AI Learning</a>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-primary btn-block"><b>Dahsboard</b></a>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">About Me</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <strong><i className="fas fa-book mr-1" /> Education</strong>
                      <p className="text-muted">
                        B.S. in Computer Science from the University of Tennessee at Knoxville
                      </p>
                      <hr />
                      <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                      <p className="text-muted">Malibu, California</p>
                      <hr />
                      <strong><i className="fas fa-pencil-alt mr-1" /> Skills</strong>
                      <p className="text-muted">
                        <span className="tag tag-danger">UI Design</span>
                        <span className="tag tag-success">Coding</span>
                        <span className="tag tag-info">Javascript</span>
                        <span className="tag tag-warning">PHP</span>
                        <span className="tag tag-primary">Node.js</span>
                      </p>
                      <hr />
                      <strong><i className="far fa-file-alt mr-1" /> Notes</strong>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                    </div>
                    {/* /.card-body */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        )
    }
}
