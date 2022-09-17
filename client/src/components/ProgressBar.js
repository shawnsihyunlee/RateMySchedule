import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        // marginRight: -850,
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 30,

        
        // margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:30,
        textAlign: 'center'
      }
      
      const progresstext = {
        padding: (0, 0),
        verticalAlign: "middle",
        color: 'black',
        fontWeight: 600,
        fontSize: 12,
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;