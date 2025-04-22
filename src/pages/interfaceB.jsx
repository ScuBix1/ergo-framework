'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FormationSection() {
  const [open, setOpen] = useState(false);

  const [trainees] = useState([
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

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center px-4 py-10 gap-6 mt-12 mb-12">
        <header className="px-6 bg-white items-center justify-center flex flex-col">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-center">
            <div className="flex items-center">
              <Button variant="outline" className="border-solid border-black">
                <span className="mr-2">←</span> Prev
              </Button>
              <h1 className="text-4xl font-bold mx-8">
                Formation du 14 avril 2025
              </h1>
            </div>
            <Button variant="outline" className="border-solid border-black">
              Next <span className="ml-2">→</span>
            </Button>
          </div>
          <h2 className="text-lg mb-4">
            Session du matin: Formation de Développement Web
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card className="border-black border-solid">
            <CardContent className="p-6 space-y-2 text-center">
              <p className="font-semibold text-2xl">Formateur: Tony BOTALLA</p>
              <p className="font-medium text-xl">Horaire: De 9h00 à 12h30</p>
              <p className="font-medium text-xl">Salle 109</p>
            </CardContent>
          </Card>

          <Card className="border-black border-solid">
            <CardContent className="p-6 space-y-4 text-center items-center flex flex-col">
              <p className="font-semibold text-3xl">Qui êtes-vous ?</p>
              <Select onValueChange={() => setOpen(true)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre nom" />
                </SelectTrigger>
                <SelectContent>
                  {trainees.map((trainee) => (
                    <SelectItem
                      key={trainee.id}
                      value={trainee.id.toString()}
                      placeholder="Sélectionnez votre nom"
                    >
                      {trainee.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Veuillez signer</DialogTitle>
            </DialogHeader>
            <div className="w-full h-[150px] bg-gray-200 border border-gray-400 rounded-md flex items-center justify-center text-gray-500 italic">
              Zone de signature
            </div>
            <DialogFooter className="flex justify-between pt-4">
              <Button variant="ghost">Effacer</Button>
              <Button onClick={() => setOpen(false)}>Valider</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
      <Footer />
    </>
  );
}
