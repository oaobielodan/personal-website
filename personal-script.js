function updateDescriptionDiv (e) {
    const target_div = e.target;
    const background = target_div.style.backgroundImage;
    const text = target_div.innerHTML;
    const match_bg = background.match(/^url\(["']?(.*?)["']?\)$/); // get the url of the bgImg
    
    if (match_bg) {
      nn.get('.description > p').innerHTML = text;
    }
}

function setupListeners () {
    nn.getAll('.preview > div').forEach(div => {
      div.on('click', updateDescriptionDiv);
    });
}
  
nn.on('load', setupListeners);