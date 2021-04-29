document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      if ((e.target === control) || (e.target === self.querySelector('.accordion__icon'))) {
        self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true)
        content.setAttribute('aria-hidden', false)
      } else {
        control.setAttribute('aria-expanded', false)
        content.setAttribute('aria-hidden', true)
        content.style.maxHeight = null
        }
      }
    });
  });

  const flags = document.querySelectorAll('.catalog__header-flag-icon');

  flags.forEach(el => {
    el.addEventListener('click', (e) => {
      if (document.querySelector('.active-flag') !== null) {
        document.querySelector('.active-flag').classList.remove('active-flag');
      };
      if (document.querySelector('.visible') !== null) {
        document.querySelector('.visible').classList.remove('visible');
      };
      if (document.querySelector('.opened') !== null) {
        document.querySelector('.opened').classList.remove('opened');
      };
      if (document.querySelector('.artist-open') !== null) {
        document.querySelector('.artist-open').classList.remove('artist-open');
      };
    })
  });

  const artists = document.querySelectorAll('.accordion__content-artist');

  artists.forEach(el => {
    el.addEventListener('click', (e) => {

      const artist = e.currentTarget.id
      const artist_block = artist.substr(0, 3) + 'artists'
      const artist_accordion = artist.substr(0, 3) + 'accordion'

      if (document.querySelector('#' + artist_block + ' .highlightened-artist') !== null) {
        document.querySelector('#' + artist_block + ' .highlightened-artist').classList.remove('highlightened-artist');
      };

      if (document.querySelector('#' + artist_accordion + ' .highlightened') !== null) {
        document.querySelector('#' + artist_accordion + ' .highlightened').classList.remove('highlightened');
      };

      e.currentTarget.classList.toggle('highlightened')

      if (document.querySelector('#' + artist).classList.contains('highlightened')) {
        document.querySelector('#' + artist + '_img').classList.toggle('highlightened-artist')
        document.querySelector('#' + artist + '_img').scrollIntoView({block: "center", behavior: "smooth"})
      } else {
        document.querySelector('#' + artist + '_img').classList.remove('highlightened-artist')
      }
    })
  });


  document.querySelector('#flag-img1').addEventListener('click', function() {
    document.querySelector('#flag1').classList.toggle('active-flag');
    document.querySelector('#fr').classList.toggle('visible');
    document.querySelector('#fr_accordion').classList.toggle('opened');
    document.querySelector('#fr_artists').classList.toggle('artist-open');
  });
  document.querySelector('#flag-img2').addEventListener('click', function() {
    document.querySelector('#flag2').classList.toggle('active-flag');
    document.querySelector('#de').classList.toggle('visible');
    document.querySelector('#de_accordion').classList.toggle('opened');
    document.querySelector('#de_artists').classList.toggle('artist-open');
  });
  document.querySelector('#flag-img3').addEventListener('click', function() {
    document.querySelector('#flag3').classList.toggle('active-flag');
    document.querySelector('#it').classList.toggle('visible');
    document.querySelector('#it_accordion').classList.toggle('opened');
    document.querySelector('#it_artists').classList.toggle('artist-open');
  });
  document.querySelector('#flag-img4').addEventListener('click', function() {
    document.querySelector('#flag4').classList.toggle('active-flag');
    document.querySelector('#ru').classList.toggle('visible');
    document.querySelector('#ru_accordion').classList.toggle('opened');
    document.querySelector('#ru_artists').classList.toggle('artist-open');
  });
  document.querySelector('#flag-img5').addEventListener('click', function() {
    document.querySelector('#flag5').classList.toggle('active-flag');
    document.querySelector('#be').classList.toggle('visible');
    document.querySelector('#be_accordion').classList.toggle('opened');
    document.querySelector('#be_artists').classList.toggle('artist-open');
  });
})
