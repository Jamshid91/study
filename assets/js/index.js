const faqs = document.querySelectorAll('.faq-item'),
      educationBtns = document.querySelectorAll('.education-btn')


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('showFaq')
    })
});

$(document).ready(function() {
    $('.lesson-video').hide();
    $('.lesson-video:first-child').show();
    $('.input-box').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.lesson-video').hide();
      $('.' + pageInfo).show();
    })
  });

  $(document).ready(function() {
    $('.education-box').hide();
    $('.education-box:first-child').show();
    $('.education-btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.education-box').hide();
      $('.' + pageInfo).show();
    })
  });

  educationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        educationBtns.forEach(education => {
            education.classList.remove('d-none')
        });
        btn.classList.add('d-none');
    })
  })