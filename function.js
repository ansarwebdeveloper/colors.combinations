
function timelineone() {
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,        
            pin:true,
            end:"bottom -350%"
        }
    })
    
    tl
    .to("#circle #btm img",{
        rotate:"-180deg",
        scale:0.5,
        duration:2.8,
        stagger:0.2,
        ease:Power1
    },"hi")
    
    .to("#circle #top img",{    
        scale:0.5,
        duration:2.8,
        stagger:0.1,
        ease:Power1
    },"hi")
    
    
    .to("#centerimg h5",{
        opacity:0,
        duration:0.2,
        stagger:0.2,
        ease:Power1
    },"hi")
    
    .to("#cimage",{
        scale:0,
        duration:1.5,
        stagger:0.1,
        ease:Power1
    },"hi")
    
    .to("#nave2l p:nth-child(2)",{
        color:"#fff",
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#nave2l p:nth-child(1)",{
        color:"#000",
        backgroundColor:"#fff",
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#nave2r i",{
        color:"#fff",    
        duration:2,
        stagger:0.1,
    },"hi")
    
    .to("#nave2r p",{
        color:"#fff",    
        duration:2,
        stagger:0.1,
    },"hi")
    
    .to("#nav h2",{
        color:"#fff",    
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#cplate .cbox:nth-child(1)",{
        opacity:0.4,   
        duration:1,
        stagger:0.1,
    },"hi")
    .to("#cplate .cbox:nth-child(2)",{
        backgroundColor:"#F2E7E6", 
        duration:1,
        stagger:0.1,
    },"hi")
    .to("#cplate .cbox:nth-child(3)",{
        backgroundColor:"#F1E8E9",   
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#cplate .cbox:nth-child(4)",{
        backgroundColor:"#F5EFF0",   
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#cplate .cbox:nth-child(5)",{
        backgroundColor:"#FBF8F8",   
        duration:1,
        stagger:0.1,
    },"hi")
    .to("#cplate .cbox:nth-child(6)",{
        backgroundColor:"#FFFFFF",   
        duration:1,
        stagger:0.1,
    },"hi")
    
    .to("#overlay h1",{
        bottom:"-50%",    
        duration:2,
        stagger:0.1,
        ease:Power1
    },"hi")
    
    
    .to("#gola",{
        top:"50%",    
        duration:2.6,
        delay:-0.6,
        scale:2.8,
        stagger:0.1,
        ease:Power1
    },"hi")
    
    
    .to("#gola",{    
        opacity:0,   
        duration:0.91,
        ease:Power1
    },"hi2")
    
    .to("#circle #btm img",{
        scale:0,   
        duration:1,
        delay:-0.6,    
        stagger:0.1,
        ease:Power1
    },"hi2")
    
    .to("#circle #top img",{
        scale:0,   
        duration:0.71,
        delay:-0.6,    
        stagger:0.1,
        ease:Power1
    },"hi2")
    
    .to("#smcircle",{
        scale:0,   
        duration:1.2,
        delay:0.1,    
        stagger:0.1,
        ease:Power1
    },"hi2")
    
    .to("#overlay h2",{
        bottom:"5%",
        rotate:0,   
        duration:3.6,
        delay:-2.8,
        stagger:0.1,
        ease:Power1
    },"hi3")
    
    .to("#info",{
        top:"-100%",
        duration:3.6,
        delay:0.5,
        stagger:0.4,
        ease:Power1
    },"hi3")
    
}

function timelinetwo(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start:"top top",
            scrub:1,        
            pin:true,
            end:"bottom -450%"
        }
    })

    tl2
    .to("#stop .circle",{
        top:"50%",
        duration:1,
        stagger:0.8,
        ease:Power1,
    })

    .to("#stop .pu",{
        left:"50%",
        duration:1,
        ease:Power1,
    },"hi")

    .to("#stop .pi",{
        left:"50%",
        duration:1,
        ease:Power1,
    },"hi")

    .to("#stop .pu",{
        scale:10,
        duration:1,
        background: "linear-gradient(to right,#D5A7B4, #B4AAD5)",
        ease:Power1,
    })

    .to("#stop h1",{
        left:"-150%",
        duration:8,
        ease:Power1,
    },"a")

    .to("#sbtm #stwo",{
        opacity:"0",
        duration:1.5,
        delay:1,
        stagger:1,
        ease:Power1,
    },"a")
    .to("#sbtm #sone",{
        opacity:"1",
        duration:2,
        delay:2,
        stagger:1,
        ease:Power1,
    },"a")

    .to("#rowbar1 .bar",{        
        height:"100%",        
        zIndex:"33",
        duration:8,
        delay:-0.5,
        stagger:1,
        ease:Power1,
    })

    .to("#rowbar2 .bar2",{        
        height:"30%",        
        zIndex:"1155",
        duration:3,
        delay:8,
        stagger:1,
        ease:Power1,
    },"a")
    .to("#rowbar2 .bar2",{        
        marginLeft:"-90px",        
        zIndex:"1155",
        duration:4,
        // stagger:1,
        ease:Power1,
    },"a2")
    .to("#rowbar3 .bar2",{        
        height:"15%",        
        zIndex:"1155",
        duration:3,
        delay:8,
        stagger:1,
        ease:Power1,
    },"a")
    .to("#rowbar3 .bar2",{        
        marginLeft:"-90px",        
        zIndex:"1155",
        duration:4,
        // stagger:1,
        ease:Power1,
    },"a2")
    .to("#rowbar3 .bar2",{        
        marginLeft:"-180px",        
        zIndex:"1155",
        duration:4,
        // stagger:1,
        ease:Power1,
    })
}

timelineone();
timelinetwo();














