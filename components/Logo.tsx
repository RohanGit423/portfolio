import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <rect width="50" height="50" rx="10" fill="#4F46E5" />
      <path
        d="M15 35V15H25C27.7614 15 30 17.2386 30 20C30 22.7614 27.7614 25 25 25H20M20 25L30 35M20 25V35"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="35" y="40" fill="white" fontSize="24" fontWeight="bold">H</text>
    </motion.svg>
  )
}

export default Logo

