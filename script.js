// Funcionalidades da Landing Page

// Função para mostrar/esconder a prévia do ebook
function togglePreview() {
    const previewSection = document.getElementById('preview-section');
    const isVisible = previewSection.style.display !== 'none';
    
    if (isVisible) {
        previewSection.style.display = 'none';
    } else {
        previewSection.style.display = 'block';
        // Scroll suave para a seção de prévia
        previewSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para rolar até a seção de CTA final
function scrollToFinalCTA() {
    const finalCTA = document.getElementById('final-cta');
    finalCTA.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Animação de entrada dos elementos quando entram na viewport
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos que devem ter animação de entrada
    const elementsToObserve = document.querySelectorAll('.feature-card, .testimonial-card, .preview-card');
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Efeito de parallax suave no hero
function initParallax() {
    const hero = document.querySelector('.hero');
    const bookContainer = document.querySelector('.book-container');
    
    if (!hero || !bookContainer) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < hero.offsetHeight) {
            bookContainer.style.transform = `translateY(${rate}px) rotate(3deg)`;
        }
    });
}

// Contador animado para estatísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        if (text.includes('+10.000')) {
            const span = counter.querySelector('span');
            if (span) {
                let count = 0;
                const target = 10000;
                const increment = target / 100;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        span.textContent = '+10.000 patriotas já leram';
                        clearInterval(timer);
                    } else {
                        span.textContent = `+${Math.floor(count).toLocaleString()} patriotas já leram`;
                    }
                }, 20);
            }
        }
    });
}

// Efeito de digitação no título
function typewriterEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.innerHTML;
    title.innerHTML = '';
    title.style.opacity = '1';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Adicionar efeito de hover nos botões
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Efeito de partículas no fundo (opcional)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(220, 38, 38, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 5}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Adicionar CSS da animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Função para adicionar efeito de loading
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #7f1d1d 0%, #000000 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loading.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(220, 38, 38, 0.3); border-top: 3px solid #dc2626; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <p style="font-size: 18px; font-weight: 600;">Carregando a verdade...</p>
        </div>
    `;
    
    document.body.appendChild(loading);
    
    // Adicionar animação de spin
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    // Remover loading após 2 segundos
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loading);
        }, 500);
    }, 2000);
}

// Função para adicionar efeito de urgência
function addUrgencyEffect() {
    const urgentElements = document.querySelectorAll('.urgent-badge, .badge');
    
    urgentElements.forEach(element => {
        setInterval(() => {
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    });
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar loading
    showLoading();
    
    // Inicializar funcionalidades após o loading
    setTimeout(() => {
        observeElements();
        initParallax();
        initButtonEffects();
        addUrgencyEffect();
        createParticles();
        
        // Animar contadores após 1 segundo
        setTimeout(animateCounters, 1000);
    }, 2000);
});

// Adicionar smooth scroll para links internos
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Adicionar efeito de hover nas estrelas dos depoimentos
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars i');
    
    stars.forEach(star => {
        star.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.color = '#fbbf24';
        });
        
        star.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Função para rastrear cliques nos botões (para analytics)
function trackButtonClick(buttonName) {
    console.log(`Botão clicado: ${buttonName}`);
    // Aqui você pode adicionar código para enviar dados para Google Analytics ou outro serviço
}

// Adicionar event listeners para rastreamento
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.btn-primary, .btn-cta');
    const previewButton = document.querySelector('.btn-secondary');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => trackButtonClick('Download'));
    });
    
    if (previewButton) {
        previewButton.addEventListener('click', () => trackButtonClick('Preview'));
    }
});

