import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

function FormationAttendancePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [trainees, setTrainees] = useState([
    { id: 1, name: 'Bobby Fischer', status: 'Présent', signature: '' },
    { id: 2, name: 'Alexandra Botez', status: 'En attente', signature: '' },
    { id: 3, name: 'Magnus Carlsen', status: 'En attente', signature: '' },
    { id: 4, name: 'Hikaru Nakamura', status: 'Présent', signature: '' },
    { id: 5, name: 'Levi Rozmann', status: 'En attente', signature: '' },
    { id: 6, name: 'Dommnaraju Gukesh', status: 'En attente', signature: '' },
    { id: 7, name: 'Bobby Fischer', status: 'En attente', signature: '' },
    { id: 8, name: 'Bobby Fischer', status: 'En attente', signature: '' },
    { id: 9, name: 'Bobby Fischer', status: 'En attente', signature: '' },
    { id: 10, name: 'Bobby Fischer', status: 'Présent', signature: '' },
    { id: 11, name: 'Bobby Fischer', status: 'En attente', signature: '' },
    { id: 12, name: 'Bobby Fischer', status: 'Absent', signature: '' },
    { id: 13, name: 'Bobby Fischer', status: 'Présent', signature: '' },
    { id: 14, name: 'Bobby Fischer', status: 'En attente', signature: '' },
    { id: 15, name: 'Bobby Fischer', status: 'Absent', signature: '' },
  ]);

  // Fonction pour rendre les boutons actifs ou inactifs en fonction du statut
  const getButtonState = (status, buttonType) => {
    switch (buttonType) {
      case 'cancelSignature':
        // Actif uniquement pour les présents
        return status === 'Présent';
      case 'manualSignature':
        // Actif pour les absents et en attente
        return status === 'Absent' || status === 'En attente';
      case 'setAbsent':
        // Actif uniquement pour les en attente
        return status === 'En attente';
      default:
        return false;
    }
  };

  // Fonction pour mettre à jour le statut d'un stagiaire
  const updateTraineeStatus = (id, newStatus) => {
    setTrainees(
      trainees.map((trainee) =>
        trainee.id === id ? { ...trainee, status: newStatus } : trainee
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <header className=" px-6 bg-white items-center justify-center flex mt-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-center">
          <div className="flex items-center">
            <Button variant="outline" className="mr-4">
              <span className="mr-2">←</span> Prev
            </Button>
            <h1 className="text-4xl font-bold mx-8">
              Formation du 14 avril 2025
            </h1>
          </div>
          <Button variant="outline">
            Next <span className="ml-2">→</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 px-6 py-4 bg-white">
        <div className="max-w-6xl mx-auto ">
          <div className="flex justify-center items-center flex-col h-auto mb-16">
            <h2 className="text-lg mb-4">
              Session du matin: Formation de Développement Web
            </h2>

            <div className="flex gap-4 mb-6">
              <Button
                variant="outline"
                className="bg-white"
                onClick={() => setModalOpen(true)}
              >
                Générer le QR code
              </Button>
              <Button className="bg-black text-white hover:bg-black/90">
                Copier le lien de signature
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="font-bold">
              Liste des stagiaires ( {trainees.length} stagiaires )
            </div>
            <div className="flex gap-2 h-8">
              <Input
                type="text"
                placeholder="Rechercher un stagiaire..."
                className="w-80"
              />
              <Button className="bg-black text-white hover:bg-black/90">
                Rechercher
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="bg-white">
                <TableHead className="w-1/4">Nom</TableHead>
                <TableHead className="w-1/6">Status</TableHead>
                <TableHead className="w-1/4">Signature</TableHead>
                <TableHead className="w-1/3">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainees.map((trainee) => (
                <TableRow
                  key={trainee.id}
                  className="border-t border-black py-4 font-bold"
                >
                  <TableCell>{trainee.name}</TableCell>
                  <TableCell>{trainee.status}</TableCell>
                  <TableCell className="bg-gray-200 h-12"></TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className={
                          getButtonState(trainee.status, 'setAbsent')
                            ? 'bg-black text-white hover:bg-black/90'
                            : 'bg-gray-200 text-gray-500'
                        }
                        disabled={!getButtonState(trainee.status, 'setAbsent')}
                        onClick={() =>
                          updateTraineeStatus(trainee.id, 'Absent')
                        }
                      >
                        Mettre absent
                      </Button>
                      <Button
                        variant="outline"
                        className={
                          getButtonState(trainee.status, 'cancelSignature')
                            ? 'bg-black text-white hover:bg-black/90'
                            : 'bg-gray-200 text-gray-500'
                        }
                        disabled={
                          !getButtonState(trainee.status, 'cancelSignature')
                        }
                        onClick={() =>
                          updateTraineeStatus(trainee.id, 'En attente')
                        }
                      >
                        Annuler la signature
                      </Button>
                      <Button
                        variant="outline"
                        className={
                          getButtonState(trainee.status, 'manualSignature')
                            ? 'bg-black text-white hover:bg-black/90'
                            : 'bg-gray-200 text-gray-500'
                        }
                        disabled={
                          !getButtonState(trainee.status, 'manualSignature')
                        }
                        onClick={() =>
                          updateTraineeStatus(trainee.id, 'Présent')
                        }
                      >
                        Signature manuelle
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl font-medium text-center">
              Scanner le QR Code
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-0 flex justify-center">
            <div className="w-64 h-64 relative">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" width="200" height="200" fill="white" />

                <rect x="10" y="10" width="30" height="30" fill="black" />
                <rect x="15" y="15" width="20" height="20" fill="white" />
                <rect x="20" y="20" width="10" height="10" fill="black" />

                <rect x="160" y="10" width="30" height="30" fill="black" />
                <rect x="165" y="15" width="20" height="20" fill="white" />
                <rect x="170" y="20" width="10" height="10" fill="black" />

                <rect x="10" y="160" width="30" height="30" fill="black" />
                <rect x="15" y="165" width="20" height="20" fill="white" />
                <rect x="20" y="170" width="10" height="10" fill="black" />

                {Array.from({ length: 10 }).map((_, i) => (
                  <g key={i}>
                    {Array.from({ length: 10 }).map((_, j) => {
                      const shouldFill = Math.random() > 0.5;
                      return shouldFill ? (
                        <rect
                          key={`${i}-${j}`}
                          x={50 + i * 10}
                          y={50 + j * 10}
                          width="10"
                          height="10"
                          fill="black"
                        />
                      ) : null;
                    })}
                  </g>
                ))}

                <rect
                  x="50"
                  y="10"
                  width="100"
                  height="10"
                  fill={Math.random() > 0.5 ? 'black' : 'white'}
                />
                <rect
                  x="10"
                  y="50"
                  width="10"
                  height="100"
                  fill={Math.random() > 0.5 ? 'black' : 'white'}
                />
                <rect
                  x="180"
                  y="50"
                  width="10"
                  height="100"
                  fill={Math.random() > 0.5 ? 'black' : 'white'}
                />
                <rect
                  x="50"
                  y="180"
                  width="100"
                  height="10"
                  fill={Math.random() > 0.5 ? 'black' : 'white'}
                />
              </svg>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

export default FormationAttendancePage;
