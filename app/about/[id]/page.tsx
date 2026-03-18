const AboutEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <p className="max-w-6xl mx-auto mt-2.5 text-2xl font-bold text-green-300">
      Edit About Page {id}
    </p>
  );
};

export default AboutEditPage;
