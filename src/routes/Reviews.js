import Feedback from "../components/Feedback";
import feedbackData from "../components/FeedbackData";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const Reviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition }}
    >
      <Feedback feedbackData={feedbackData} />
    </motion.div>
  );
};

export default Reviews;
