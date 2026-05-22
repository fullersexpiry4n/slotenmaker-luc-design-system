'use client'

import { useEffect } from 'react'

export default function SiteScripts() {
  useEffect(() => {
    const cleanups: (() => void)[] = []

    /* ── Mobile menu ── */
    const hamburger = document.getElementById('hamburger') as HTMLButtonElement
    const mobileMenu = document.getElementById('mobileMenu') as HTMLElement

    const closeMobileMenu = () => {
      mobileMenu.classList.remove('is-open')
      hamburger.classList.remove('is-open')
      hamburger.setAttribute('aria-expanded', 'false')
      mobileMenu.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu)
    })

    const onHamburger = () => {
      const open = mobileMenu.classList.toggle('is-open')
      hamburger.classList.toggle('is-open', open)
      hamburger.setAttribute('aria-expanded', String(open))
      mobileMenu.setAttribute('aria-hidden', String(!open))
      document.body.style.overflow = open ? 'hidden' : ''
    }
    hamburger.addEventListener('click', onHamburger)
    cleanups.push(() => hamburger.removeEventListener('click', onHamburger))

    /* ── Smooth scroll ── */
    const onSmoothScroll = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement
      const id = a.getAttribute('href')?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
      a.addEventListener('click', onSmoothScroll)
      cleanups.push(() => a.removeEventListener('click', onSmoothScroll))
    })

    /* ── Header shadow on scroll ── */
    const header = document.getElementById('siteHeader') as HTMLElement
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    /* ── Sticky call bar ── */
    const stickyBar = document.getElementById('stickyBar') as HTMLElement
    const heroSection = document.getElementById('home') as HTMLElement
    const stickyObserver = new IntersectionObserver(
      ([entry]) => stickyBar.classList.toggle('is-visible', !entry.isIntersecting),
      { threshold: 0 }
    )
    stickyObserver.observe(heroSection)
    cleanups.push(() => stickyObserver.disconnect())

    /* ── GSAP + Three.js (async import so they don't block SSR) ── */
    async function initAnimations() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.config({ ignoreMobileResize: true })

      const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (noMotion) {
        gsap.set('.hero-copy, .hero-visual, .hero-copy > *, .hero-stats > *, .hero-title .line', {
          opacity: 1, y: 0, x: 0, scale: 1,
        })
      } else {
        /* Initial states */
        gsap.set('.site-header', { yPercent: -100 })
        gsap.set(['.logo', '.nav-link', '.header-cta'], { opacity: 0, y: -10 })
        gsap.set('.hero-copy .overline', { opacity: 0, y: 20 })
        gsap.set('.hero-title .line', { opacity: 0, y: '105%' })
        gsap.set('.hero-lead', { opacity: 0, y: 24 })
        gsap.set('.hero-cta .btn', { opacity: 0, y: 18 })
        gsap.set(['.stat', '.stat-divider'], { opacity: 0, y: 16 })
        gsap.set('.hero-photo', { opacity: 0, x: 40, scale: 0.96 })
        gsap.set('.hero-badge', { opacity: 0, y: 20, scale: 0.88 })

        /* Page load timeline */
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.05 })
        intro
          .to('.site-header', { yPercent: 0, duration: 0.65, ease: 'power2.out' })
          .to(['.logo', '.nav-link', '.header-cta'], { opacity: 1, y: 0, stagger: 0.07, duration: 0.45 }, '-=0.3')
          .to('.hero-photo', { opacity: 1, x: 0, scale: 1, duration: 1.0, ease: 'power2.out' }, 0.35)
          .to('.hero-copy .overline', { opacity: 1, y: 0, duration: 0.5 }, 0.5)
          .to('.hero-title .line', { opacity: 1, y: '0%', stagger: 0.14, duration: 0.85 }, 0.62)
          .to('.hero-lead', { opacity: 1, y: 0, duration: 0.55 }, 0.92)
          .to('.hero-cta .btn', { opacity: 1, y: 0, stagger: 0.10, duration: 0.5 }, 1.08)
          .to(['.stat-divider', '.stat'], { opacity: 1, y: 0, stagger: 0.07, duration: 0.5 }, 1.2)
          .to('.hero-badge', { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(2.8)' }, 1.4)

        gsap.to('.hero-badge', { y: '-=7', repeat: -1, yoyo: true, duration: 2.8, ease: 'sine.inOut', delay: 2.2 })

        gsap.to('.hero-visual', { y: -70, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 } })
        gsap.to('.hero-copy', { y: -28, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 } })

        gsap.from('.band-item, .band-dot, .band-cta', { opacity: 0, y: 18, stagger: 0.09, duration: 0.55, ease: 'power2.out', scrollTrigger: { trigger: '.band', start: 'top 90%' } })

        gsap.utils.toArray<HTMLElement>('.section-header').forEach(hdr => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: hdr, start: 'top 86%' } })
          const overline = hdr.querySelector('.overline')
          const title = hdr.querySelector('.section-title')
          const lead = hdr.querySelector('.section-lead')
          if (overline) tl.from(overline, { opacity: 0, y: 14, duration: 0.45 })
          if (title) tl.from(title, { opacity: 0, y: 32, duration: 0.75, ease: 'power3.out' }, '-=0.15')
          if (lead) tl.from(lead, { opacity: 0, y: 18, duration: 0.5 }, '-=0.35')
        })

        gsap.set('.service-card', { transformPerspective: 900 })
        ScrollTrigger.batch('.service-card', {
          onEnter: batch => gsap.from(batch, { y: 64, opacity: 0, scale: 0.97, stagger: 0.11, duration: 0.8, ease: 'power3.out' }),
          start: 'top 88%', once: true,
        })

        document.querySelectorAll<HTMLElement>('.service-card').forEach(card => {
          const onMove = (e: MouseEvent) => {
            const r = card.getBoundingClientRect()
            const x = (e.clientX - r.left) / r.width - 0.5
            const y = (e.clientY - r.top) / r.height - 0.5
            gsap.to(card, { rotateY: x * 8, rotateX: -y * 8, duration: 0.35, ease: 'power2.out' })
          }
          const onLeave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' })
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          cleanups.push(() => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) })
        })

        gsap.utils.toArray<HTMLElement>('.step').forEach(step => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 87%' } })
          const num = step.querySelector('.step__num')
          const title = step.querySelector('.step__title')
          const body = step.querySelector('.step__body')
          if (num) tl.from(num, { scale: 0, opacity: 0, duration: 0.55, ease: 'back.out(2.5)' })
          if (title) tl.from(title, { y: 20, opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.1')
          if (body) tl.from(body, { y: 14, opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.25')
          tl.from(step, { background: 'rgba(200,149,58,0.06)', duration: 0.6, ease: 'power2.inOut' }, 0)
        })

        gsap.from('.step-arrow', { opacity: 0, x: -18, stagger: 0.18, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.steps-grid', start: 'top 86%' } })

        ScrollTrigger.batch('.testimonial', {
          onEnter: batch => gsap.from(batch, { y: 55, opacity: 0, rotateX: 7, transformPerspective: 700, stagger: 0.13, duration: 0.8, ease: 'power3.out' }),
          start: 'top 90%', once: true,
        })

        gsap.from('.trust-item', { opacity: 0, y: 14, scale: 0.94, stagger: 0.09, duration: 0.5, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.trust-bar', start: 'top 90%' } })

        gsap.from('.price-table thead tr', { opacity: 0, y: -12, duration: 0.4, ease: 'power2.out', scrollTrigger: { trigger: '.price-table', start: 'top 85%' } })
        gsap.from('.price-table tbody tr', { opacity: 0, x: -28, stagger: 0.08, duration: 0.55, ease: 'power2.out', scrollTrigger: { trigger: '.price-table', start: 'top 85%' } })

        gsap.from('.faq-title', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.faq', start: 'top 85%' } })
        gsap.from('.faq-item', { opacity: 0, y: 18, stagger: 0.09, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.faq', start: 'top 85%' } })

        gsap.from('.contact-info .overline', { opacity: 0, y: 14, duration: 0.4, scrollTrigger: { trigger: '.contact-info', start: 'top 86%' } })
        gsap.from('.contact-info .section-title', { opacity: 0, y: 28, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: '.contact-info', start: 'top 86%' } })
        gsap.from('.contact-list li', { opacity: 0, x: -28, stagger: 0.1, duration: 0.55, ease: 'power2.out', scrollTrigger: { trigger: '.contact-list', start: 'top 87%' } })
        gsap.from('.contact-form', { opacity: 0, y: 44, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-form', start: 'top 90%' } })
        gsap.from('.field', { opacity: 0, y: 14, stagger: 0.07, duration: 0.45, ease: 'power2.out', scrollTrigger: { trigger: '.form-body', start: 'top 88%' } })

        gsap.from('.footer-brand, .footer-col', { opacity: 0, y: 28, stagger: 0.09, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.site-footer', start: 'top 92%' } })

        /* Counters */
        document.querySelectorAll<HTMLElement>('[data-target]').forEach(el => {
          ScrollTrigger.create({
            trigger: el, start: 'top 82%', once: true,
            onEnter() {
              const obj = { val: 0 }
              gsap.to(obj, {
                val: +(el.dataset.target ?? 0), duration: 1.9, ease: 'power2.out',
                onUpdate() { el.textContent = String(Math.round(obj.val)) },
              })
            },
          })
        })

        /* Magnetic buttons */
        document.querySelectorAll<HTMLElement>('.btn--accent, .btn--primary').forEach(btn => {
          const onMove = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect()
            gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.28, y: (e.clientY - r.top - r.height / 2) * 0.28, duration: 0.3, ease: 'power2.out' })
          }
          const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.45)' })
          btn.addEventListener('mousemove', onMove)
          btn.addEventListener('mouseleave', onLeave)
          cleanups.push(() => { btn.removeEventListener('mousemove', onMove); btn.removeEventListener('mouseleave', onLeave) })
        })

        /* Logo hover */
        const logoEl = document.querySelector<HTMLElement>('.logo')
        const logoMark = document.querySelector<HTMLElement>('.logo__mark')
        if (logoEl && logoMark) {
          const onEnter = () => gsap.to(logoMark, { letterSpacing: '0.30em', duration: 0.35, ease: 'power2.out' })
          const onLeave = () => gsap.to(logoMark, { letterSpacing: '0.22em', duration: 0.4, ease: 'power2.out' })
          logoEl.addEventListener('mouseenter', onEnter)
          logoEl.addEventListener('mouseleave', onLeave)
          cleanups.push(() => { logoEl.removeEventListener('mouseenter', onEnter); logoEl.removeEventListener('mouseleave', onLeave) })
        }
      }

      cleanups.push(() => ScrollTrigger.getAll().forEach(t => t.kill()))
    }

    initAnimations()

    return () => cleanups.forEach(fn => fn())
  }, [])

  return null
}
