const activePage = document.querySelector('.page'),
      mainPage = document.querySelector('.main'),
      showMainBtn = document.querySelector('.first-box__btn'),
      handle = document.querySelector('.handle');

showMainBtn.addEventListener('click', () => {
    activePage.classList.add('d-none', 'position-fixed');
    mainPage.classList.remove('d-none');
    animateFunc();
})


function animateFunc() {
    const printFunc = () => {
        const elem = document.querySelector('.anim_1 .print');
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
                anim_1_1 = document.querySelector('.anim_1_1')
                setTimeout(() => {
                    anim_1_1.classList.remove('d-none');
                    printFunc2();
                }, 2500);
            }
             
     }, 60);
       
    }
    
    setTimeout(() => {
        printFunc()
    }, 500);
    
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
                clearInterval(interval);

                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
          }, 60);
       
    }
    
    
    const printFunc3 = () => {
        const elem = document.querySelector('.anim-page-2 .print');
        setInterval(() => {
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
                    printFunc4()
                }, 500);
            }
             
      }, 60);
      
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
          }, 60);
       
    }

    const printFunc5 = () => {
        const elem = document.querySelector('.anim_2_1 .print');
        setInterval(() => {
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
                    printFunc6()
                }, 500);
            }
             
          }, 60);
          
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
                    setTimeout(() => {
                        printFunc7();
                    }, 500);
                }, 2500);
            }
             
          }, 60);
    }
        
    const printFunc7 = () => {
        const elem = document.querySelector('.anim_2_2 .print');
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
                    handle.classList.remove('d-none')
                }, 1000);
                
            }
             
          }, 60);
          
    }
    
    const printFunc8 = () => {
        const elem = document.querySelector('.anim_3 .print');
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
                    printFunc9()
                }, 500);
            }
             
          }, 60);
       
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 2000);
            }
             
         }, 60);
         
    }
    
    const printFunc10 = () => {
        const elem = document.querySelector('.anim_3_1 .print');
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
                    printFunc11()
                }, 500);
            }
             
          }, 60);
       
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 2000);
            }
             
         }, 60);
         
    }
    
    const printFunc12 = () => {
        const elem = document.querySelector('.anim_3_2 .print');
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
                    printFunc13()
                }, 100);
            }
             
        }, 60);
       
    }
    
    const printFunc13 = () => {
        const elem = document.querySelector('.anim_3_2 .print2');
        setTimeout(() => {
            elem.classList.remove('d-none')
        }, 100);
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
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
         }, 60);
         
    }
    
    const printFunc14 = () => {
        const elem = document.querySelector('.anim_3_3 .print');
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
                    printFunc15()
                }, 500);
            }
             
         }, 60);
       
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
                }, 2500);
            }
             
         }, 60);
         
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
             
      }, 60);
       
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
     }, 60);
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
         }, 60);
         
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
               
            }
             
          }, 60);
           
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
               
            }
             
        }, 60);
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
                    setTimeout(() => {
                        printFunc22();
                    }, 500);
                }, 2500);
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
          }, 60);
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
               
            }
             
         }, 60);
         
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
         }, 60);
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
                    setTimeout(() => {
                        printFunc25()
                    }, 500);
                }, 2500);
            }
             
          }, 60);
          
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
                setTimeout(() => {
                    handle.classList.remove('d-none')
                }, 1000);
            }
             
          }, 60);
          
    }
    let sections = document.querySelectorAll('.main section')
    let [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13] = sections 

    window.addEventListener('scroll', () => {
        const point1 = document.querySelector('.show-anim_1'),
              page1 = document.querySelector('.anim-page-1'),
              page2 = document.querySelector('.anim-page-2')
              
      
        const positionPoint1 = point1.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if(screenPosition > positionPoint1) {
            page1.classList.add('animPage')
            page2.classList.remove('d-none');
            point1.classList.remove('show-anim_1');
            setTimeout(() => {
                s1.classList.add('d-none')
            }, 500);
            setTimeout(() => {
                printFunc3();
            }, 500);
            window.scrollTo(0, 0)
            handle.classList.add('d-none')
        } 
      
      })

      window.addEventListener('scroll', () => {
        const point2 = document.querySelector('.show-anim_2'),
              anim2 = document.querySelector('.anim_2'),
              anim2_1 = document.querySelector('.anim_2_1')
              
        const positionPoint2 = point2.getBoundingClientRect().top
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionPoint2) {
            anim2.classList.add('animPage');
            anim2_1.classList.remove('d-none')
            point2.classList.remove('show-anim_2');
            window.scrollTo(0, 0)
            setTimeout(() => {
                s2.classList.add('d-none')
            }, 500);
            setTimeout(() => {
                printFunc5();  
            }, 500); 
            handle.classList.add('d-none')   
        }
      })

      window.addEventListener('scroll', () => {
        const page2 = document.querySelector('.anim-page-2'),
              point2_1 = document.querySelector('.show-anim_2_1'),
              page3 = document.querySelector('.anim-page-3');
        const positionPoint2_1 = point2_1.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if(screenPosition > positionPoint2_1) {
            page2.classList.add('animPage');
            page3.classList.remove('d-none');
            point2_1.classList.remove('show-anim_2_1');
            window.scrollTo(0, 0)
            setTimeout(() => {
                s3.classList.add('d-none')
            }, 500);
            setTimeout(() => {
                printFunc8();  
            }, 500);
            
            handle.classList.add('d-none')
        }
      });

      window.addEventListener('scroll', () => {
        const point3 = document.querySelector('.show-anim_3'),
              anim3 = document.querySelector('.anim_3'),
              anim3_1 = document.querySelector('.anim_3_1');
      
      
        const positionPoint3 = point3.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionPoint3) {
            anim3.classList.add('animPage');
            anim3_1.classList.remove('d-none');
            point3.classList.remove('show-anim_3');
            window.scrollTo(0, 0)
            setTimeout(() => {
                s4.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc10();
            }, 500);
            handle.classList.add('d-none')
        } 
      });

      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_3_1')
              anim3_1 = document.querySelector('.anim_3_1')
              anim3_2 = document.querySelector('.anim_3_2')
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim3_1.classList.add('animPage');
            anim3_2.classList.remove('d-none');
            myInfo.classList.remove('show-anim_3_1')
            window.scrollTo(0, 0)
            setTimeout(() => {
                s5.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc12();
            }, 500);
            handle.classList.add('d-none')   
        } 
      
      });
      
      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_3_2')
              anim3_2 = document.querySelector('.anim_3_2')
              anim3_3 = document.querySelector('.anim_3_3')
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim3_2.classList.add('animPage');
            anim3_3.classList.remove('d-none');
            myInfo.classList.remove('show-anim_3_2')
            window.scrollTo(0, 0)
            setTimeout(() => {
                s6.classList.add('d-none')
                s7.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc14();
            }, 500);
            handle.classList.add('d-none')   
        } 
      
      });

      
      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_3_4')
              anim3 = document.querySelector('.anim-page-3')
              anim4 = document.querySelector('.anim-page-4')
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim3.classList.add('animPage');
            anim4.classList.remove('d-none');
            myInfo.classList.remove('show-anim_3_4')
            window.scrollTo(0, 0)
            setTimeout(() => {
                s8.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc18();
            }, 500);
            handle.classList.add('d-none')   
           
        } 
      
      });

      
      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_4')
              anim4 = document.querySelector('.anim_4')
              anim4_1 = document.querySelector('.anim_4_1')
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim4.classList.add('animPage');
            anim4_1.classList.remove('d-none');
            myInfo.classList.remove('show-anim_4')
            window.scrollTo(0, 0)
            setTimeout(() => {
                s9.classList.add('d-none')
                s10.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc19();
            }, 500);
            handle.classList.add('d-none')   
        } 
      
      });
      
      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_4_2')
              anim4 = document.querySelector('.anim-page-4')
              anim5 = document.querySelector('.anim-page-5')
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim4.classList.add('animPage');
            anim5.classList.remove('d-none');
            myInfo.classList.remove('show-anim_4_2')
            window.scrollTo(0, 0)
            setTimeout(() => {
                s11.classList.add('d-none')
            }, 500);
            window.scrollTo(0, 0)
            setTimeout(() => {
                printFunc24();
            }, 500);
            handle.classList.add('d-none')   
        } 
      
      });
      
      window.addEventListener('scroll', () => {
        const myInfo = document.querySelector('.show-anim_5');
              main = document.querySelector('.main');
              anim = document.querySelector('.animate');
              page = document.querySelector('.page');
              sections = document.querySelector('.sections');
      
      
        const positionMyInfo = myInfo.getBoundingClientRect().top;
      
        const screenPosition = window.innerHeight;
      
        if(screenPosition > positionMyInfo) {
            anim.classList.add('topAnim')
            page.classList.remove('d-none')
            sections.classList.add('d-none')
            setTimeout(() => {
                main.classList.add('d-none')
                    location.reload();
            }, 700);
            
           
        
        } 
      })
    }
