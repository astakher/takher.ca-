import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import site from '../content/site.json'

export default function Intro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          aria-hidden
          exit={{
            clipPath: 'circle(0% at 50% 46%)',
            filter: 'blur(6px)',
            transition: { duration: 0.75, ease: [0.7, 0, 0.2, 1] },
          }}
          initial={{ clipPath: 'circle(150% at 50% 46%)' }}
          animate={{ clipPath: 'circle(150% at 50% 46%)' }}
        >
          <div className="intro-name">
            {site.intro.name.split('').map((ch, i) =>
              ch === ' ' ? (
                <span key={i} className="sp" />
              ) : (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: '0.55em', filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ),
            )}
          </div>
          <motion.div
            className="intro-role"
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.intro.role}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
