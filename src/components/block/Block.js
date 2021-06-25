import React from 'react'
import Group from '../../assets/img/Group.svg'
import Group1 from '../../assets/img/Group (1).svg'
import Group2 from '../../assets/img/Group (2).svg'
import './Block.css'

const Block = () => {
    return (
        <>
            <div className="block">
                <div className="block_1_container">
                    <div className="cont_img_text">
                        <img src={Group} alt="" className="icon" />
                        <h2 className="block_1_zogo">Protect Your Company</h2>
                        <ul>
                            <li className="list">Compliance Audits & Training</li>
                            <li className="list">Employee Data Storage</li>
                            <li className="list">Policy Drafting</li>
                        </ul>
                    </div>
                </div>
                <div className="block_2_container">
                    <div className="cont_img_text">
                        <img src={Group1} alt="" className="icon" />
                        <h2 className="block_1_zogo">Set Your Employees Up For Success</h2>
                        <ul>
                            <li className="list">Learning & Development</li>
                            <li className="list">Employee Relationse</li>
                            <li className="list">Benefit Management</li>
                            <li className="list">Employee Performance</li>
                        </ul>
                    </div>
                </div>
                <div className="block_1_container">
                    <div className="cont_img_text">
                        <img src={Group2} alt="" className="icon" />
                        <h2 className="block_1_zogo">Know Your Industry's Legal Landscape</h2>
                        <ul>
                            <li className="list">Work Place Investigations</li>
                            <li className="list">Employee Mediations</li>
                            <li className="list">Performance Tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Block;