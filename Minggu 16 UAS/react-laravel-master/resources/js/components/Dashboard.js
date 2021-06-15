import React, {  useState, useEffect } from 'react'
import Pagination from "react-js-pagination";
import { useSelector, connect } from 'react-redux';
import rootAction from '../redux/actions/index'
import { fadeIn } from 'animate.css'
import 'iziToast/dist/css/iziToast.css';

function Dashboard(props) {

    const [state, setState] = useState({
       authUser: props.authUserProp,
       totalLeads: 0,
       weeklyLeads: 0,
       monthlyLeads: 0,
       recentLeads: [],
       loading: false
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const iziToast = require('iziToast');

            iziToast.show({
                timeout: 0,
                progressBar: false,
                displayMode: 'once',
                theme: 'light',
                id: 'star-notification',
                title: '<a target="_blank" rel="noopener noreferrer" href="https://github.com/mukhammadarifin/Pemrograman-Berbasis-Framework--Genap-2021"><img src="https://img.shields.io/github/stars/mukhammadarifin/Pemrograman-Berbasis-Framework--Genap-2021?style=social" alt="Github Star"/></a>',
                message: 'Link Source dan bantu beri ⭐️ di <a target="_blank" rel="noopener noreferrer" href="https://github.com/mukhammadarifin/Pemrograman-Berbasis-Framework--Genap-2021">GitHub</a>.'
            });
        }
        
        props.setActiveComponentProp('Dashboard');
        loadData();
    }, []);

    const loadData = () => {
        setState({
            ...state,
            loading: true
        });
        axios.get('/api/v1/dashboard-data', {
            params: {
                api_token: state.authUser.api_token,
            }
        })
        .then(response => {
            setState({
                ...state,
                loading: false,
                totalLeads: response.data.message.totalLeads,
                weeklyLeads: response.data.message.weeklyLeads,
                monthlyLeads: response.data.message.monthlyLeads,
                recentLeads: response.data.message.recentLeads,
            })
        })
        .catch((error) => {
            setState({
                ...state,
                loading: false
            });
            console.log(error);
        });
    };

    const showRecentLeads = () => {
        return state.recentLeads.length == 0 ? <tr><td className="text-muted lead">No Recent Lead</td></tr> : 
                state.recentLeads.map((lead, i) => {
                    return <tr key={i}>
                                <td>
                                    <img src="/assets/images/faces/face1.jpg" className="mr-2" alt="image"/> {lead.name} </td>
                                <td> {lead.email} </td>
                                <td> {lead.phone} </td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-gradient-success" role="progressbar" style={{width: lead.progress+'%'}} aria-valuenow={lead.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                            </tr>;
                });
    };

    return (
        <React.Fragment>
            <div className="page-header">
				<h3 className="page-title">
					<span className="page-title-icon bg-gradient-info text-white mr-2">
						<i className="mdi mdi-home"></i>
					</span>
				 	Dashboard
				</h3>
			</div>
			
            <div className="row animated fadeIn">
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-danger card-img-holder text-white">
                    <div className="card-body">
                        <img src="/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image"/>
                        <h4 className="font-weight-normal mb-3">Total Pegawai <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                        </h4>
                        <h2 className="mb-5">{state.totalLeads}</h2>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-info card-img-holder text-white">
                    <div className="card-body">
                        <img src="/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">Pegawai Baru Minggu Ini<i className="mdi mdi-calendar-text mdi-24px float-right"></i>
                        </h4>
                        <h2 className="mb-5">{state.weeklyLeads}</h2>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-green-gradient card-img-holder text-white">
                    <div className="card-body">
                        <img src="/assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                        <h4 className="font-weight-normal mb-3">Pegawai Baru Bulan Ini <i className="mdi mdi-calendar-multiple-check mdi-24px float-right"></i>
                        </h4>
                        <h2 className="mb-5">{state.monthlyLeads}</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-12 grid-margin">
                <div className="card">
                    <div className="card-body animated fadeIn">
                        <h4 className="card-title">Recent Leads</h4>
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th> Nama </th>
                                <th> Email </th>
                                <th> Telepon </th>
                                <th> Progress </th>
                            </tr>
                            </thead>
                            <tbody>
                                {showRecentLeads()}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </React.Fragment>
    );
}


//redux state can be accessed as props in this component(Optional)
const mapStateToProps = (state) => {
	return {
		authUserProp: state.authUserReducer,
		activeComponentProp: state.activeComponentReducer,
	}
}

/**
 * redux state can be change by calling 'props.setAuthUserProp('demo user');' when 
 * applicable(Optional to )
 * 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserProp: (user) => dispatch(rootAction.setAuthUser(user)),
        setActiveComponentProp: (component) => dispatch(rootAction.setActiveComponent(component))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)