// src/components/ImageToggle.tsx
import { component$, useSignal, $ } from '@builder.io/qwik';

export const ImageToggle = component$(({ imgSrc, buttonId }: { imgSrc: string; buttonId: string; }) => {
  const activeImage = useSignal<string | null>(null);

  const showImage = $(() => {
    activeImage.value = imgSrc; // Show the image when hovered
  });

  const hideImage = $(() => {
    activeImage.value = null; // Hide the image when not hovered
  });

  return (
    <div class="relative inline-block">
      <button
        id={buttonId}
        class="ml-2 text-blue-500 underline image-button"
        onMouseEnter$={showImage} // Show image on hover
        onMouseLeave$={hideImage} // Hide image when not hovered
      >
        See Image
      </button>
      {activeImage.value === imgSrc && (
        <img
          src={imgSrc}
          alt="Image"
          width={1024}
          height={1024}
          class="absolute left-full ml-4 top-0 max-w-2xl border border-gray-300 rounded-lg shadow-lg z-10"
        />
      )}
    </div>
  );
});
