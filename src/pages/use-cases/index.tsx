import React from 'react';
import Layout from '@theme/Layout';
import SimpleHeader from "@site/src/components/SimpleHeader";
import styles from "./styles.module.css";
import UseCaseCards from '@site/src/components/UseCaseCards';
import clsx from 'clsx';

export default function UseCases(): JSX.Element {
  return (
    <Layout
      title="Explore Typical Use Cases"
      description="Learn how our solutions can help you transform your infrastructure."
    >
      <main>
        <SimpleHeader pageTitle="Explore Typical Use Cases" />
        <div className={clsx("container", styles.useCasesContainer)}>
          <UseCaseCards useCases={useCases} />
        </div>
      </main>
    </Layout >
  );
}

const useCases = [
  {
    title: "High Frequency Vibration Data Storage",
    description: "Learn how to store and manage high-frequency vibration data.",
    link: "/use-cases/vibration-sensors",
    image: require("@site/static/img/use-cases/vibration-sensors/reduction-strategy.webp").default,
  },
  {
    title: "AI Infrastructure",
    description: "Learn how to store and manage data for AI workflows.",
    link: "/use-cases/ai-workflows",
    image: require("@site/static/img/use-cases/ai-workflows/data-replication-with-label-filtering.webp").default,
  },
  {
    title: "Computer Vision Applications",
    description: "Learn how to store data for computer vision applications.",
    link: "/blog/tutorials/computer-vision/3-ways-stora-data-for-computer-vision-applications",
    image: require("@site/static/img/use-cases/computer-vision.webp").default,
  },
  {
    title: "MQTT Data Storage",
    description: "Learn how to store and manage MQTT data.",
    link: "/blog/advice/database/mqtt-data-storage",
    image: require("@site/static/img/use-cases/mqtt.webp").default,
  },
  {
    title: "Robot Operating System (ROS)",
    description: "Learn how to store and manage image data for ROS-based computer vision applications.",
    link: "/blog/tutorials/ros/optimal-image-storage-solutions-for-ros-based-computer-vision",
    image: require("@site/static/img/use-cases/robot.webp").default,
  },
  {
    title: "Kafka Data Sink",
    description: "Learn how to implement a Kafka data sink.",
    link: "/blog/tutorial/datastreaming/kafka/data-sink-guide",
    image: require("@site/static/img/use-cases/kafka.webp").default,
  },
  {
    title: "Anomaly Detection",
    description: "Learn how to implement an open-source AI anomaly detection system.",
    link: "/blog/computer-vision/edge-computing/ai/Implementing-open-source-ai-anomaly-detection",
    image: require("@site/static/img/use-cases/anomaly-detection.webp").default,
  },
  {
    title: "Pytorch Data Streaming",
    description: "Learn how to implement database data streaming with Pytorch.",
    link: "/blog/ai/datastreaming/pytorch/implement-database-data-streaming-pytorch",
    image: require("@site/static/img/use-cases/pytorch.webp").default,
  }
];