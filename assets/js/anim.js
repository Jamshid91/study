const activePage = document.querySelector('.page'),
      mainPage = document.querySelector('.main'),
      showMainBtn = document.querySelector('.first-box__btn')

showMainBtn.addEventListener('click', () => {
    activePage.classList.add('d-none');
    mainPage.classList.remove('d-none');
    animateFunc();
})



function animateFunc() {
    const printFunc = () => {
        const elem = document.querySelector('.anim_1 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                anim_1_1 = document.querySelector('.anim_1_1')
                setTimeout(() => {
                    anim_1_1.classList.remove('d-none');
                    printFunc2();
                }, 1200);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    printFunc();
    
    const printFunc2 = () => {
        const elem = document.querySelector('.anim_1_1 .print2');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval)
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_1_1')
                          page_1 = document.querySelector('.anim-page-1')
                          anim_2 = document.querySelector('.anim-page-2')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        page_1.classList.add('lastPage')
                        anim_2.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_1_1')
                        printFunc3();
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc3 = () => {
        const elem = document.querySelector('.anim-page-2 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.scrollTo(0, 0);
                setTimeout(() => {
                    printFunc4()
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    
    const printFunc4 = () => {
        const elem = document.querySelector('.anim_2 .print2');
                setTimeout(() => {
                    elem.classList.remove('d-none')
                }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_2')
                          anim_2 = document.querySelector('.anim_2')
                          anim_2_1 = document.querySelector('.anim_2_1')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim_2.classList.add('animPage');
                        myInfo.classList.remove('show-anim_2')
                        anim_2_1.classList.remove('d-none');
                        printFunc5(); 
                        
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    
    const printFunc5 = () => {
        const elem = document.querySelector('.anim_2_1 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc6()
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc6 = () => {
        const elem = document.querySelector('.anim_2_1 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                    const anim_2_2 = document.querySelector('.anim_2_2');
                  setTimeout(() => {
                    anim_2_2.classList.remove('d-none');
                    printFunc7();
                }, 1200);
            }
             
        }, 70);
        window.scrollTo(0, 0);
    }
    
    const printFunc7 = () => {
        const elem = document.querySelector('.anim_2_2 .print');
        elem.classList.remove('d-none')
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_2_2')
                          anim2 = document.querySelector('.anim-page-2')
                          anim3 = document.querySelector('.anim-page-3')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim2.classList.add('animPage');
                        anim3.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_2_2')
                        printFunc8();
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc8 = () => {
        const elem = document.querySelector('.anim_3 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc9()
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    const printFunc9 = () => {
        const elem = document.querySelector('.anim_3 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_3')
                          anim3 = document.querySelector('.anim_3')
                          anim3_1 = document.querySelector('.anim_3_1')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim3.classList.add('d-none');
                        anim3_1.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_3')
                        printFunc10();
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc10 = () => {
        const elem = document.querySelector('.anim_3_1 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc11()
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc11 = () => {
        const elem = document.querySelector('.anim_3_1 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_3_1')
                          anim3_1 = document.querySelector('.anim_3_1')
                          anim3_2 = document.querySelector('.anim_3_2')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim3_1.classList.add('d-none');
                        anim3_2.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_3_1')
                        printFunc12();
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc12 = () => {
        const elem = document.querySelector('.anim_3_2 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc13()
                }, 700);
            }
             
        }, 70);
        window.scrollTo(0, 0);
    }
    
    const printFunc13 = () => {
        const elem = document.querySelector('.anim_3_2 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_3_2')
                          anim3_2 = document.querySelector('.anim_3_2')
                          anim3_3 = document.querySelector('.anim_3_3')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim3_2.classList.add('d-none');
                        anim3_3.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_3_2')
                        printFunc14();
                    } 
                  
                  })
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc14 = () => {
        const elem = document.querySelector('.anim_3_3 .print');
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc15()
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc15 = () => {
        const elem = document.querySelector('.anim_3_3 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                anim3_4 = document.querySelector('.anim_3_4');
                setTimeout(() => {
                    anim3_4.classList.remove('d-none');
                    printFunc16();
                }, 500);
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc16 = () => {
        const elem = document.querySelector('.anim_3_4 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc17();
                }, 500);
                
            }
             
        }, 35);
        window.scrollTo(0, 0);
    }
    
    const printFunc17 = () => {
        const elem = document.querySelector('.anim_3_4 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_3_4')
                          anim3 = document.querySelector('.anim-page-3')
                          anim4 = document.querySelector('.anim-page-4')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim3.classList.add('d-none');
                        anim4.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_3_4')
                        setTimeout(() => {
                            printFunc18();
                        }, 500);
                        window.scrollTo(0, 0);
                    } 
                  
                  })
            }
             
        }, 35);
    }
    
    const printFunc18 = () => {
        const elem = document.querySelector('.anim_4 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_4')
                          anim4 = document.querySelector('.anim_4')
                          anim4_1 = document.querySelector('.anim_4_1')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim4.classList.add('d-none');
                        anim4_1.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_4')
                        setTimeout(() => {
                            printFunc19();
                        }, 500);
                        window.scrollTo(0, 0);
                    } 
                  
                  })
            }
             
        }, 35);
    }
    
    const printFunc19 = () => {
        const elem = document.querySelector('.anim_4_1 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc20();
                }, 500);
                window.scrollTo(0, 0);
            }
             
        }, 35);
    }
    const printFunc20 = () => {
        const elem = document.querySelector('.anim_4_1 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc21();
                }, 500);
                window.scrollTo(0, 0);
            }
             
        }, 35);
    }
    const printFunc21 = () => {
        const elem = document.querySelector('.anim_4_1 .print3');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                const anim4_2 = document.querySelector('.anim_4_2');
                setTimeout(() => {
                    anim4_2.classList.remove('d-none')
                    printFunc22();
                }, 1200);
                window.scrollTo(0, 0);
            }
             
        }, 35);
    }
    const printFunc22 = () => {
        const elem = document.querySelector('.anim_4_2 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                setTimeout(() => {
                    printFunc23();
                }, 500);
                window.scrollTo(0, 0);
            }
             
        }, 35);
    }
    
    const printFunc23 = () => {
        const elem = document.querySelector('.anim_4_2 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_4_2')
                          anim4 = document.querySelector('.anim-page-4')
                          anim5 = document.querySelector('.anim-page-5')
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        anim4.classList.add('d-none');
                        anim5.classList.remove('d-none');
                        myInfo.classList.remove('show-anim_4_2')
                        setTimeout(() => {
                            printFunc24();
                        }, 500);
                        window.scrollTo(0, 0);
                    } 
                  
                  })
            }
             
        }, 35);
    }
    
    const printFunc24 = () => {
        const elem = document.querySelector('.anim_5 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                const elem = document.querySelector('.anim_5 .chat');
                const anim5 = document.querySelector('.anim_5_1');
                setTimeout(() => {
                    elem.classList.remove('d-none')
                }, 500);
                setTimeout(() => {
                    anim5.classList.remove('d-none')
                    printFunc25()
                }, 2000);
            }
             
        }, 35);
    }
    
    
    const printFunc25 = () => {
        const elem = document.querySelector('.anim_5_1 .print');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 500);
        const text = elem.textContent.replace(/\s+/g, ' ').trim();
    
        let count = 0;
        let newText = '';
        let interval;
    
        elem.textContent = ''
    
        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText
            count++
    
            if(count === text.length) {
                clearInterval(interval);
                window.addEventListener('scroll', () => {
                    const myInfo = document.querySelector('.show-anim_5');
                          main = document.querySelector('.main');
                          page = document.querySelector('.page');
                  
                  
                    const positionMyInfo = myInfo.getBoundingClientRect().top;
                  
                    const screenPosition = window.innerHeight;
                  
                    if(screenPosition > positionMyInfo) {
                        myInfo.classList.remove('show-anim_5')
                        page.classList.remove('d-none')
                        main.classList.add('d-none')
                        window.scrollTo(0, 0);
                        location.reload();
                        window.scrollTo(0, 0);
                    } 
                  
                  })
                
            }
             
        }, 35);
    }
}