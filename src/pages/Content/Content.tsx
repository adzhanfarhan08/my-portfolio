import { useParams } from 'react-router-dom';
import MarkdownViewer from '@/components/MarkdownViewer/MarkdownViewer';

const Content = () => {
  const { contentId } = useParams<{ contentId: string }>();
  console.log('contentId:', contentId); // Tambahkan ini untuk debugging

  const getFilePath = () => {
    switch (contentId) {
      case 'reactjs1':
        return '../public/content/example.md';
      case 'proxmox1':
        return '../public/content/Part1_Introduction_to_Proxmox.md';
      default:
        return '../public/content/example.md';
    }
  };

  return (
    <div className="flex justify-center items-center p-5">
      <MarkdownViewer filePath={getFilePath()} />
    </div>
  );
};

export default Content;
