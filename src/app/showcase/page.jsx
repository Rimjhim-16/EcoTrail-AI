"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "@/components/ui";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShowcasePage() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

    }, 2000);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

        <h1 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-8">
          <br/>Component Showcase
        </h1>

        {/* Buttons */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Buttons
          </h2>

          <div className="flex gap-4 flex-wrap">

            <Button variant="primary">
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button disabled>
              Disabled
            </Button>

          </div>

        </section>

        {/* Input */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Input
          </h2>

          <Input
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </section>

        {/* Modal */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Modal
          </h2>

          <Button
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </Button>

        </section>

        {/* Loader */}

        <section className="mb-12">

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Loader
          </h2>

          <Button
            onClick={handleLoader}
          >
            Show Loader
          </Button>

          {loading && <Loader />}

        </section>

      {/* Toast */}

<section className="mb-12">

  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
    Toast
  </h2>

  <Button
    onClick={() => {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }}
  >
    Show Toast
  </Button>

</section>

      </main>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="EcoTrail AI"
      >
        <p className="mb-4 text-gray-800">
            This is the reusable modal component.
        </p>

        <Button
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>

      </Modal>

      {showToast && (
        <Toast
          message="Loader finished successfully!"
        />
      )}

      <Footer />
    </>
  );
}