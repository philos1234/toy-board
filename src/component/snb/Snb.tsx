import React from "react"
import { Link } from "react-router-dom"
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
// import { createStyles, makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles({
//     text: {

//     }
// })

const Snb = () => {
    // const classes = useStyles()
    return (
        <nav className="Snb">
            <header className="header">
                {/* <img src="/images/mainLogo.png" alt="메인 로고" /> */}
            </header>
            <section className="section">
                <ul className="SnbList">
                    <Link to="/home">
                        <li className="menuItem">
                            <HomeIcon className="menuIcon" />
                            <span className="menuText">홈</span>
                        </li>
                    </Link>
                    <Link to="/board">
                        <li className="menuItem">
                            <AssignmentIcon className="menuIcon" />
                            <span className="menuText">게시물 목록</span>
                        </li>
                    </Link>
                </ul>
            </section>
        </nav >
    )
}

export default Snb