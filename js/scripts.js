'use strict';

window.addEventListener('load', () => {

  const faq = document.querySelector('.faq');

  faq.addEventListener('click', (e) => {
    if (e.target.classList.contains('ask')) {
      slideToggle(e.target.nextElementSibling);
      //niceToggle(e.target.nextElementSibling);
    }
  });
});

function niceToggle(el) {
  if (el.jsAnimated === true) {
    return;
  }

  el.jsAnimated = true;
  const keyframes = [{
      opacity: 1,
      transform: 'translateY(0)'
    },
    {
      opacity: 0,
      transform: 'translateY(50px)'
    }
  ];

  if (el.classList.contains('open')) {
    const animate = el.animate(keyframes, {
      duration: 500,
    });

    animate.addEventListener('finish', () => {
      el.jsAnimated = false;
      el.classList.remove('open');
    });
  } else {
    el.classList.add('open');

    const animate = el.animate(keyframes, {
      duration: 500,
      direction: 'reverse'
    });
    animate.addEventListener('finish', () => {
      el.jsAnimated = false;
    });
  }
}


function slideToggle(el) {
  if (el.jsAnimated === true) {
    return;
  }

  el.jsAnimated = true;

  if (el.classList.contains('open')) {
    const animate = el.animate(
      [{
          height: el.clientHeight + 'px'
        },
        {
          height: 0
        }
      ], {
        duration: 500,
      }
    );

    animate.addEventListener('finish', () => {
      el.jsAnimated = false;
      el.classList.remove('open');
    });
  } else {
    el.classList.add('open');

    const animate = el.animate(
      [{
          height: 0
        },
        {
          height: el.clientHeight + 'px'
        }
      ], {
        duration: 500,
      }
    );
    animate.addEventListener('finish', () => {
      el.jsAnimated = false;
    });
  }
}
