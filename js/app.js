document.querySelectorAll('.scene').forEach((elem) => {
 
  const modifier = elem.getAttribute('data-modifier')
 
  basicScroll.create({
    elem: elem,
    from: 0,
    to: 519,
    props: {
      '--translateY': {
        from: '0',
        to: `${ 15 * modifier }px`,
        direct: true
      }
    }
  }).start()
  
})