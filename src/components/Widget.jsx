import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "../css/widget.css"
function Widget() {
    return (
        <>
            <div className="widget">
                <div className="widget_top">
                    <div className="widget_header">
                        <h4>Linkedin News</h4>
                        <InfoIcon />
                    </div>
                    <div className="widget_body">
                        <ul className='widget_option'>
                            <li>
                                <h4>Slaying Job Search Fees</h4>
                                <p>6d ago * 4,55 readers</p>
                            </li>

                            <li>
                                <h4>A two Pizza rule for eating</h4>
                                <p>2d ago *  6,12 readers</p>
                            </li>

                            <li>
                                <h4>How to handle a workplace breakup</h4>
                                <p>3d ago * 40,450 readers</p>
                            </li>

                            <li>
                                <h4>Flexi leave is the new flexi</h4>
                                <p>4d ago *  6,12 readers</p>
                            </li>

                            <li>
                                <h4>Shorter hours boost productivity</h4>
                                <p>1d ago *  4,9 readers</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget_bootom">
                    <div className="widget_header">
                        <h4>Today's Top Courses</h4>
                        <InfoIcon />
                    </div>
                    <div className="widget_body">
                        <ul className='widget_option'>
                            <li>
                                <h4>Leading with a Heavy Heat</h4>
                                <p>Kayel Jamienson</p>
                            </li>

                            <li>
                                <h4>Building Resillience</h4>
                                <p>Darly Mitchel</p>
                            </li>

                            <li>
                                <h4>Critical thinking for better judgement</h4>
                                <p>Powel Romanin</p>
                            </li>

                            <li>
                                <h4>Boost productivity</h4>
                                <p>Henery Nicholas</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Widget
