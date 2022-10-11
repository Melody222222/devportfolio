import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChrome,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default () => {
    const projects = [
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        },
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        },
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        },
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        },
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        },
        {
            img: '../static/cart.jpg',
            projectName: 'Online Shopping Cart',
            link: '#',
            gitRepo: 'https://github.com/Melody222222/Task15',
        }
    ];
    return (
        <div className="custom-card">
            <div className="container section">
                <div className="row d-flex">
                    <div className="col-md-12 heading-margin">
                        <h1 className='centered white'>
                            Projects
                        </h1>
                    </div>
                </div>
                <div className="row d-flex">
                    {
                        projects.map((project, key) => (
                            <div className="col-md-3 about-text d-flex align-items-stretch margin-1em" >
                                <div className="card">
                                    <img className="card-img-top" src={project.img} alt={project.projectName} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.projectName}</h5>
                                        <span className='icon-gap align-items-center'> <FontAwesomeIcon icon={faGithub} /><Link href={project.gitRepo}><a className="remove-decoration">GitHub Repo</a></Link></span>
                                        <span className='icon-gap align-items-center'> <FontAwesomeIcon icon={faChrome} /><Link href={project.link}><a className="remove-decoration">Project Link</a></Link></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <style jsx global>
                {`
            .white{
                color: #fff;
            }
            
            .custom-card {
                transition: 0.3s;
                // height: 100vh;
                overflow-y: auto;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #000;

              }

              .round{
                border-radius: 50px !important;
              }

              .centered{
                margin-top: 10px;
                text-align: center;
              }

              .about-text{
                display: flex;
                flex-direction: column;
                gap: 1em;
              }

              .content {
                height: 100% !important;
              }
              
              .remove-decoration {
                text-decoration: none;
              }

              .icon-gap{
                display: flex;
                gap: 1em;
              }

              .margin-1em{
                margin: 1em 0;
              }

              .heading-margin{
                margin: 5em 0 1em 0;
              }
        `}
            </style>
        </div>
    )
}