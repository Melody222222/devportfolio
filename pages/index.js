export default () => {
    return (
        <div>
            <div className="bg"></div>
            <div className="main-content">
                <header>
                    <h1>Welcome to my Portfolio</h1>
                    <p>Browse around to get to know me better, see my past work <br/> and how you can contact me.</p>
                </header>
            </div>

            <style jsx>
            {`
            .bg {  
                background-image:url(../static/home.jpg);
                background-repeat:no-repeat;
                background-size:cover;
                bottom:0;
                filter:contrast(.7) brightness(.7);  
                left:0;
                position:fixed;
                right:0;
                top:0;
              }
              
              .main-content {
                align-items:center;
                bottom:0;
                color:white;
                display:flex;
                flex-wrap:wrap;
                font-family:sans-serif;
                justify-content:center;
                left:0;
                padding:20vw;
                position:fixed;
                right:0;
                text-align:center;
                top:0;
              }
              
              h1 {
                font-weight:normal;
              }
            `}
        </style>
        </div>

        
    )
}
